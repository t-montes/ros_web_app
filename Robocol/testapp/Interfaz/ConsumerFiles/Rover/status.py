#!/usr/bin/env python3
# # ROS imports
import rospy #libretia de python que necestita ros
from std_msgs.msg import String
from std_msgs.msg import Float32
from sensor_msgs.msg import Image

# Django imports
from channels.generic.websocket import AsyncWebsocketConsumer
import json
from asgiref.sync import async_to_sync
from asgiref.sync import sync_to_async
from channels.layers import get_channel_layer
print('STATUS LIBRARY')


c = 0 # CONTADOR PARA SOLO CARGAR LOS SUBSCRIBERS Y PUBLISHERS DE ROS UNA VEZ
#2 topicos: uno para las llantas (ppublisher) y otro para las baterias (subscriber)

### VARIABLES DE LOS PUBLISHERS DE ROS ###
pub_wheels  = None
pub_cam1=None

### TOPICOS DE ROS ###
#Interfaz publica a potencia
topic_publish_wheels = '/robocol/interfaz/potencia/wheels'

#Potencia publica a interfaz
topic_subscriber_wheels = '/robocol/potencia/interfaz/wheels'

topic_subscriber_batteries = '/Robocol/Power/voltages'

topic_publish_cam1 = "/cam1_signal"
### CLASE STATUS CONSUMER ###

class StatusConsumer(AsyncWebsocketConsumer):
    print('STATUS CONSUMER')

    ##Se llama cuando el angular crea un a pestaña y este crea un objeto de tipo service,
    ##ese service crea un socket y este se conecta con el archivo.
    async def connect(self):
        global c, pub_wheels
        if(c==0):
            print('STATUS CONNECTED')
            print("Initializing publishers")
            pub_wheels = rospy.Publisher(topic_publish_wheels, String, queue_size=1)
            pub_cam1 = rospy.Publisher(topic_publish_cam1, Float32, queue_size=1)
            print("Initializing subscriber")
            rospy.Subscriber(topic_subscriber_batteries, String, async_to_sync(self.callback_batteries))
            rospy.Subscriber(topic_subscriber_wheels, String, async_to_sync(self.callback_wheels))

            c+=1
        await self.channel_layer.group_add("status", self.channel_name)
        await self.accept() ## se crea el socket
        msg_start_camera = Float32()
        msg_start_camera.data = 1
        pub_cam1.publish(msg_start_camera)


    async def callback_batteries(self, param):
        #el param es el msg que llega del topico (cuando el subscriber me notifica que hubo un cambio)
        print("Status received a batteries message")
        rospy.loginfo(rospy.get_caller_id() + "I heard %s", param.data)
        #param tiene metadatos, y el mensaje está es param.data
        split = param.data.split(",")
        try:
            await self.channel_layer.group_send("status",{"type":"group_message",'id': 'batteries', "idBattery": split[0], "volts":split[1]})
        except Exception as e:
            print(e)


    async def  callback_wheels(self, param):
        #el param es el msg que llega del topico (cuando el subscriber me notifica que hubo un cambio)
        print("Status received a wheels message")
        rospy.loginfo(rospy.get_caller_id() + "I heard %s", param.data)
        #param tiene metadatos, y el mensaje está es param.data
        split = param.data.split(",")
        try:
            await self.channel_layer.group_send("status",{"type":"group_message",'id': 'wheel', "idWheel": split[0], "current":split[1], "speed": split[2]})
        except Exception as e:
            print(e)

        await self.send(text_data=json.dumps({'id': 'wheel', "idWheel": split[0], "current":split[1], "speed": split[2]}))


    async def disconnect(self, close_code):
        print('STATUS DISCONNECTED')
        print(close_code)

    #Cuando envío un mensaje desde angular, se usa esta funcion (ej : cuando presiono un boton)
    #En sí, se les dice a los publishers que vayan y escriban en el topico (tablero)
    async def receive(self, text_data):
        global c, pub_wheels
        print('STATUS RECEIVED')
        #ext data es parecido al param, es lo que recibo del angular
        text_data = json.loads(text_data)
        print(text_data)
        id = text_data['id']
        msg = String()
        if id == "wheel":
            action=text_data['action']
            llanta=text_data['llanta']
            print("1")
            msg.data = action + ":" + str(llanta)
            #depende de lo que diga potencia
            print ("en el msg ")
            pub_wheels.publish(msg)
            print('Wheels message published to topic')
        elif id == 'cam1_signal':
            msg = Float32()
            msg.data = 0
            pub_cam1.publish(msg)
            print('Message published to topic')

    async def group_message(self, event):
        if(event["id"] == 'batteries'):
            await self.send(text_data=json.dumps({'id': 'batteries', "idBattery": event[0], "volts":event[1] }))
        elif (event["id"]=="wheel"):
            await self.channel_layer.group_send("status",{"type":"group_message",'id': 'wheel', "idWheel": event[0], "current":event[1], "speed": event[2]})

    async def callback_cam1(self, param):
        print("Arm received a cam1 topic message")
        print(param.data)
