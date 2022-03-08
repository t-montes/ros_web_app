#!/usr/bin/env python3
# # ROS imports
import rospy
from std_msgs.msg import String
from std_msgs.msg import Float32
# from sensor_msgs.msg import Image
# Django imports
from channels.generic.websocket import AsyncWebsocketConsumer
import json
from asgiref.sync import async_to_sync
from asgiref.sync import sync_to_async
from channels.layers import get_channel_layer
print('NAVEGACION LIBRARY')

c = 0 # CONTADOR PARA SOLO CARGAR LOS SUBSCRIBERS Y PUBLISHERS DE ROS UNA VEZ

### VARIABLES DE LOS PUBLISHERS DE ROS ###
pub_control, pub_potencia  = None, None


### TOPICOS DE ROS ###

topic_publish_control = '/robocol/HyS/ControlButtons'
topic_publish_potencia = '/robocol/HyS/powerBar'


### CLASE NAVEGACION CONSUMER ###

class NavegacionConsumer(AsyncWebsocketConsumer):
    print('NAVEGACION CONSUMER')
    async def connect(self):
        global c, pub_control, pub_potencia
        if(c==0):
            print('NAVEGACION CONNECTED')
            print("Initializing publishers")
            pub_control = rospy.Publisher(topic_publish_control, String, queue_size=1)
            pub_potencia = rospy.Publisher(topic_publish_potencia, Float32, queue_size=1)
            c+=1
        print(self.channel_name)
        await self.channel_layer.group_add("navegacion", self.channel_name)
        await self.accept()

    async def receive(self, text_data):
        global c, pub_control, pub_potencia
        print('NAVEGACION RECEIVED')
        text_data = json.loads(text_data)
        print(text_data)
        id = text_data['id']
        if id == "control":
            msg = String()
            msg.data = text_data['command']
            print(msg.data)
            pub_control.publish(msg)
            print('Message published to topic /robocol/HyS/ControlButtons')
        elif id == 'power_bar':
            msg = Float32()
            msg.data = text_data['command']
            print(msg.data)
            pub_potencia.publish(msg)
            print('Message published to topic /robocol/HyS/powerBar')
    

    async def disconnect(self, close_code):
        print('NAVEGACION DISCONNECTED')
        await self.channel_layer.group_discard("navegacion", self.channel_name)
        print(close_code)