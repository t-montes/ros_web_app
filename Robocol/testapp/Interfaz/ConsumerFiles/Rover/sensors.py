#!/usr/bin/env python3
# IMPORTS
# Python imports
import json
import random
# ROS imports
import rospy
from std_msgs.msg import String
from std_msgs.msg import Float32
# Django imports
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
# Messages imports
from Interfaz.models import Message
from Interfaz.serializers import MessageSerializer



class SensorsConsumer(AsyncWebsocketConsumer):
    print('SENSORS CONSUMER')

    temp_msg = String()
    # active = 0;
    # CALLBACKS
    def callback(self,param):
        # if self.active:
        print('Callback',param)
        text = str(param.data)

        self.send(text_data=json.dumps({'id': 'objects_values', 'values': objetos, 'temp':str(100)}))
        # message = Message(text=text, tab_name=self.scope["url_route"]["kwargs"]["tab_name"])
        # message = Message(text=text, tab_name=self.tab_name)
        # message.save()
        # async_to_sync(self.channel_layer.group_send)(self.tab_group_name,{"type": "chat_message", "message": MessageSerializer(message).data},)
        # all_users = list(Member.objects.filter(is_active = True).values_list('id', flat = True))
        # for user_id in all_users:

    async def connect(self):
        print('SENSORS CONNECTED\n')
        # self.active = 1
        # ---------------------------------------- ROS init ----------------------------------------
        # PUBLISHERS
        print('Publishing to /sensors_data')
        self.pub_cmd = rospy.Publisher("/sensors_data",String,queue_size=1)
        # SUBSCRIBERS
        print('Subscribing to /robocol/sensors/temp')
        rospy.Subscriber("/robocol/sensors/temp",String,self.callback)
        # -------------------------------------- Socket init --------------------------------------
        # self.tab_name = self.scope["url_route"]["kwargs"]["tab_name"]
        self.tab_name = "sensorica"
        self.tab_group_name = "chat_{}".format(self.tab_name)
        await self.channel_layer.group_add(self.tab_group_name, self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        print('SENSORS DISCONNECTED -> ','close_code: ',close_code)
        await self.channel_layer.group_discard(self.tab_group_name, self.channel_name)

    async def receive(self, text_data):
        print('SENSORS RECEIVED -> ','text_data: ',text_data)
        text_data_json = json.loads(text_data)
        print('JSON loads: ',text_data_json)
        text = text_data_json["message"]
        print('Dictionary: ',text)
        print(' Data type: ',type(text))
        self.temp_msg.data = str(text)
        print(self.temp_msg)
        self.pub_cmd.publish(self.temp_msg)
        # if text == "close":
        #     self.active = 0;
        # if text == "open":
        #     self.active = 1;
        
        # message = Message(text=text, tab_name=self.scope["url_route"]["kwargs"]["tab_name"])
        message = Message(text=text, tab_name=self.tab_name)
        # message.save()
        await self.channel_layer.group_send(self.tab_group_name,{"type": "chat_message", "message": MessageSerializer(message).data},)

    async def chat_message(self, event):
        print('SENSORS MESSAGE: ',event)
        message = event["message"]
        print('Message: ',message)
        # Send message to WebSocket
        await self.send(text_data=json.dumps({"message": message}))
