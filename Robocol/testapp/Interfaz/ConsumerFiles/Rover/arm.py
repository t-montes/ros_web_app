#!/usr/bin/env python3
# # ROS imports
import rospy
from std_msgs.msg import String
from std_msgs.msg import Float32
# Django imports
from channels.generic.websocket import AsyncWebsocketConsumer
import json
from asgiref.sync import async_to_sync
from asgiref.sync import sync_to_async
print('ARM LIBRARY')

#Nosotros publicamos en este - Brazo se suscribe a este
topic_to_publish = '/interface_to_robocol_arm_topic'

#Nosotros nos suscribimos a este - Brazo publica en este
topic_to_subscribe = '/robocol_to_interface_arm_topic'

class ArmConsumer(AsyncWebsocketConsumer):
    print('ARM CONSUMER')

    async def connect(self):
        print('ARM CONNECTED')
        print("Initializing publisher")
        self.pub = rospy.Publisher(topic_to_publish, String, queue_size=1)
        print("Initializing subscriber")
        rospy.Subscriber(topic_to_subscribe, String, async_to_sync(self.callback))
        print("Initializing message")
        await self.accept()

    #Ejemplos de mensajes que enviamos al tópico:
    # - "joint_1:increase"
    # - "stop_changing_value"
    # - "get_values" (Con este, brazo debe enviar uno a uno los valores de los joints y del gripper)
    async def receive(self, text_data):
        print('ARM RECEIVED')
        text_data = json.loads(text_data)
        id = text_data['id']
        msg = String()
        if id == 'change_value':
            objeto = text_data['object']
            action = text_data['action']
            msg.data = objeto + ":" + action
            print(msg.data)
            self.pub.publish(msg)
            print('done')
        elif id == 'stop_changing_value':
            msg.data = "stop_changing_value"
            print(msg.data)
            self.pub.publish(msg)
            print('dejar de cambiar valor')
        elif id == 'get_values':
            msg.data = "get_values"
            print(msg.data)
            self.pub.publish(msg)
            print('Solicitar el valor de los objetos')

    #Ejemplos de mensajes que esperamos recibir:
    # - "joint_1:35"
    # - "gripper:70"
    async def callback(self, param):
        print("Arm received a topic message")
        rospy.loginfo(rospy.get_caller_id() + "I heard %s", param.data)
        split = param.data.split(":")
        await self.send(text_data=json.dumps({'id': 'object_value', 'object': split[0], 'value': split[1]}))

    async def disconnect(self, close_code):
        print('ARM DISCONNECTED')
        print(close_code)