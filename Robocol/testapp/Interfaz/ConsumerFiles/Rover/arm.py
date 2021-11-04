#!/usr/bin/env python3
# # ROS imports
import rospy
from std_msgs.msg import String
from std_msgs.msg import Float32
from sensor_msgs.msg import Image
# Django imports
from channels.generic.websocket import AsyncWebsocketConsumer
import json
from asgiref.sync import async_to_sync
from asgiref.sync import sync_to_async
from channels.layers import get_channel_layer
print('ARM LIBRARY')

c = 0 # CONTADOR PARA SOLO CARGAR LOS SUBSCRIBERS Y PUBLISHERS DE ROS UNA VEZ

### VARIABLES DE LOS PUBLISHERS DE ROS ###
pub_movearm, pub_sistema_extraccion_b, pub_cam3, pub_cam4  = None, None, None, None


### TOPICOS DE ROS ###

topic_publish_sistema_extraccion_b = '/robocol/interfaz/brazo/sistema_extraccion_b'

topic_publish_brazo = '/robocol/interfaz/movearm'

topic_publish_cam3 = "/cam3_signal"

topic_publish_cam4 = "/cam4_signal"


### CLASE ARM CONSUMER ###

class ArmConsumer(AsyncWebsocketConsumer):
    print('ARM CONSUMER')
    async def connect(self):
        global c, pub_movearm, pub_sistema_extraccion_b, pub_cam3, pub_cam4
        if(c==0):
            print('ARM CONNECTED')
            print("Initializing publishers")
            pub_sistema_extraccion_b = rospy.Publisher(topic_publish_sistema_extraccion_b, Float32, queue_size=1)
            pub_movearm = rospy.Publisher(topic_publish_brazo, String, queue_size=1)
            pub_cam3 = rospy.Publisher(topic_publish_cam3, Float32, queue_size=1)
            pub_cam4 = rospy.Publisher(topic_publish_cam4, Float32, queue_size=1)
            c+=1
        print(self.channel_name)
        await self.channel_layer.group_add("brazo", self.channel_name)
        await self.accept()
        msg_start_camera = Float32()
        msg_start_camera.data = 1
        pub_cam3.publish(msg_start_camera)
        pub_cam4.publish(msg_start_camera)
        

    async def receive(self, text_data):
        global c, pub_movearm, pub_sistema_extraccion_b, pub_cam1
        print('ARM RECEIVED')
        text_data = json.loads(text_data)
        print(text_data)
        id = text_data['id']
        if id == "movearm":
            msg = String()
            msg.data = text_data['command']
            print(msg.data)
            pub_movearm.publish(msg)
            print('Message published to topic /robocol/interfaz/movearm')
        elif id == 'sistema_extraccion_b':
            msg = Float32()
            msg.data = text_data['command']
            print(msg.data)
            pub_sistema_extraccion_b.publish(msg)
            print('Message published to topic /robocol/interfaz/brazo/sistema_extraccion_b')
        elif id == 'cams_signal':
            msg = Float32()
            msg.data = 0
            print(msg.data)
            pub_cam3.publish(msg)
            pub_cam4.publish(msg)
            print('Message published to topic')
    

    async def disconnect(self, close_code):
        print('ARM DISCONNECTED')
        await self.channel_layer.group_discard("brazo", self.channel_name)
        print(close_code)