#!/usr/bin/env python3
# # ROS imports
import rospy #libretia de python que necestita ros
from std_msgs.msg import String
from std_msgs.msg import Float32

# Django imports
from channels.generic.websocket import AsyncWebsocketConsumer
import json
from asgiref.sync import async_to_sync 
from asgiref.sync import sync_to_async
print('STATUS LIBRARY')


c = 0 # CONTADOR PARA SOLO CARGAR LOS SUBSCRIBERS Y PUBLISHERS DE ROS UNA VEZ
#2 topicos: uno para las llantas (ppublisher) y otro para las baterias (subscriber) 

### VARIABLES DE LOS PUBLISHERS DE ROS ###
pub_wheels  = None

### TOPICOS DE ROS ###

topic_publish_wheels = '/robocol/interfaz/status/wheels'
topic_subscriber_wheels = '/robocol/interfaz/status/wheels' #No se si es la misma direccion.. sería el mismo tópico, no ?

topic_subscriber_batteries = '/robocol/interfaz/status/batteries'

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
            print("Initializing subscriber")
            rospy.Subscriber(topic_subscriber_batteries, String, async_to_sync(self.callback_batteries)) 
            rospy.Subscriber(topic_subscriber_wheels, String, async_to_sync(self.callback_wheels)) 
            
            c+=1
        await self.accept() ## se crea el socket

    async def callback_batteries(self, param):
        #el param es el msg que llega del topico (cuando el subscriber me notifica que hubo un cambio)
        print("Status received a batteries message")
        rospy.loginfo(rospy.get_caller_id() + "I heard %s", param.data)
        #param tiene metadatos, y el mensaje está es param.data 
        #split = param.data.split(",") 
        await self.send(text_data=json.dumps({'id': 'batteries', "idBattery": param.data.id, "amps":param.data.amps, "ohms":param.data.ohms, "name":param.data.name, "volts":param.data.volts, "percentage":param.data.percentage}))
    
    async def  callback_wheels(self, param):
        #el param es el msg que llega del topico (cuando el subscriber me notifica que hubo un cambio)
        print("Status received a wheels message")
        rospy.loginfo(rospy.get_caller_id() + "I heard %s", param.data)
        #param tiene metadatos, y el mensaje está es param.data 
        #split = param.data.split(",") 
        await self.send(text_data=json.dumps({'id': 'wheel', "idWheel": param.data.id, "current":param.data.current, "speed": param.data.speed}))
    
   
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
        