#!/usr/bin/env python3
# Python imports
import json
# ROS imports
import rospy
from std_msgs.msg import String
from std_msgs.msg import Float32
# Django imports
from channels.generic.websocket import AsyncWebsocketConsumer
from asgiref.sync import async_to_sync
# Messages imports
from Interfaz.models import Message
from Interfaz.serializers import MessageSerializer

class TractionConsumer(AsyncWebsocketConsumer):
	print('TRACTION CONSUMER')
	# CALLBACKS
	def callback(self,param):
		print('Callback',param)
		text = str(param.data)

		message = Message(text=text, tab_name=self.tab_name)
		# message.save()
		async_to_sync(self.channel_layer.group_send)(self.tab_group_name,{"type": "chat_message", "message": MessageSerializer(message).data},)

	async def connect(self):
		print('TRACTION CONNECTED\n')
		# ---------------------------------------- ROS init ----------------------------------------
		# PUBLISHERS
		print('Publishing to /robocol/traction/pub_ex')
		pub_cmd = rospy.Publisher("/robocol/traction/pub_ex",String,queue_size=1)
		# SUBSCRIBERS
		print('Subscribing to /robocol/traction/topic_name')
		rospy.Subscriber("/robocol/traction/topic_name",String,self.callback)

		# -------------------------------------- Socket init --------------------------------------
		self.tab_name = "traccion"
		print(' tab_name: ',self.tab_name)
		self.tab_group_name = "chat_{}".format(self.tab_name)
		await self.channel_layer.group_add(self.tab_group_name, self.channel_name)
		await self.accept()

	async def disconnect(self, close_code):
		print('TRACTION DISCONNECTED -> ','close_code: ',close_code)
		await self.channel_layer.group_discard(self.tab_group_name, self.channel_name)

	async def receive(self, text_data):
		print('TRACTION RECEIVED -> ','text_data: ',text_data)
		text_data_json = json.loads(text_data)
		text = text_data_json["message"]
		
		message = Message(text=text, tab_name=self.tab_name)
		# message.save()
		await self.channel_layer.group_send(self.tab_group_name,{"type": "chat_message", "message": MessageSerializer(message).data},)

	async def chat_message(self, event):
		print('TRACTION MESSAGE: ',event)
		message = event["message"]
		print('Message: ',message)
		# Send message to WebSocket
		await self.send(text_data=json.dumps({"message": message}))
