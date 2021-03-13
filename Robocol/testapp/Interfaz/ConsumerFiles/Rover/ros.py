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

class RosConsumer(AsyncWebsocketConsumer):
	print('ROS CONSUMER')
	# CALLBACKS
	def callback(self,param):
		print('Callback',param)
		text = str(param.data)

		message = Message(text=text, tab_name=self.tab_name)
		message.save()
		async_to_sync(self.channel_layer.group_send)(self.tab_group_name,{"type": "chat_message", "message": MessageSerializer(message).data},)

	async def connect(self):
		print('ROS TAB CONNECTED\n')
		# ---------------------------------------- ROS init ----------------------------------------
		# PUBLISHERS
		print('Publishing to /robocol/ros_info/pub_topic_name')
		pub_cmd = rospy.Publisher("/robocol/ros_info/pub_topic_name",String,queue_size=1)
		# SUBSCRIBERS
		print('Subscribing to /robocol/ros_info/topics')
		rospy.Subscriber("/robocol/ros_info/topics",String,self.callback)

		# -------------------------------------- Socket init --------------------------------------
		self.tab_name = "estadoTopicos"
		print(' tab_name: ',self.tab_name)
		self.tab_group_name = "chat_{}".format(self.tab_name)
		await self.channel_layer.group_add(self.tab_group_name, self.channel_name)
		await self.accept()

	async def disconnect(self, close_code):
		print('ROS TAB DISCONNECTED -> ','close_code: ',close_code)
		await self.channel_layer.group_discard(self.tab_group_name, self.channel_name)

	async def receive(self, text_data):
		print('ROS TAB RECEIVED -> ','text_data: ',text_data)
		text_data_json = json.loads(text_data)
		print('JSON loads: ',text_data)
		text = text_data_json["message"]
		print('Dictionary: ',text)

		if text == "List":
			text = str(rospy.get_published_topics())
		elif text == "Echo":
			text = "rostopic echo"

		message = Message(text=text, tab_name=self.tab_name)
		message.save()
		await self.channel_layer.group_send(self.tab_group_name,{"type": "chat_message", "message": MessageSerializer(message).data},)

	async def chat_message(self, event):
		print('ROS TAB MESSAGE: ',event)
		message = event["message"]
		print('Message: ',message)
		await self.send(text_data=json.dumps({"message": message})) # Send message to WebSocket