#!/usr/bin/env python3
# IMPORTS
# -- Python imports --
import json
import random
# -- ROS imports --
import rospy
from std_msgs.msg import String
from std_msgs.msg import UInt8
from std_msgs.msg import Float32
from geometry_msgs.msg import Twist
# -- Django imports --
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from asgiref.sync import sync_to_async
# -- Django model and serializer imports --
from Interfaz.models import Message
from Interfaz.serializers import MessageSerializer

c = 0 # CONTADOR PARA SOLO CARGAR LOS SUBSCRIBERS Y PUBLISHERS DE ROS UNA VEZ

class SensorsConsumer(AsyncWebsocketConsumer):
	print('SENSORS CONSUMER')
	# Valor iniciales de variables
	temp = 20
	ph = 7
	hum = 0
	air = 0
	co = 0
	co2 = 0
	met = 0
	hyd = 0
	# Variable de ROS
	test_msg = String() # Mensaje String() (TIPO ROS basado en import)
	servo_msg = UInt8() # Mensaje UInt8() (TIPO ROS basado en import)
	motor_msg = UInt8() # Mensaje UInt8() (TIPO ROS basado en import)

	# ROS CALLBACKS
	async def temp_callback(self,param):
		print(' temp_callback',param)
		self.temp = str(param.data) # Sacar dato de ROS en variable string de Python
		await self.channel_layer.group_send(self.tab_name,{'type': 'send_message','id': "get_value",'param': "temp",'value': self.temp})

	async def ph_callback(self,param):
		print(' ph_callback',param)
		self.ph = str(param.data) # Sacar dato de ROS en variable string de Python
		await self.channel_layer.group_send(self.tab_name,{'type': 'send_message','id': "get_value",'param': "ph",'value': self.ph})

	async def hum_callback(self,param):
		print(' hum_callback',param)
		self.hum = str(param.data) # Sacar dato de ROS en variable string de Python
		await self.channel_layer.group_send(self.tab_name,{'type': 'send_message','id': "get_value",'param': "hum",'value': self.hum})

	async def air_callback(self,param):
		print(' air_callback',param)
		self.air = str(param.data) # Sacar dato de ROS en variable string de Python
		await self.channel_layer.group_send(self.tab_name,{'type': 'send_message','id': "get_value",'param': "air",'value': self.air})

	async def co_callback(self,param):
		print(' co_callback',param)
		self.co = str(param.data) # Sacar dato de ROS en variable string de Python
		await self.channel_layer.group_send(self.tab_name,{'type': 'send_message','id': "get_value",'param': "co",'value': self.co})

	async def co2_callback(self,param):
		print(' co2_callback',param)
		self.co2 = str(param.data) # Sacar dato de ROS en variable string de Python
		await self.channel_layer.group_send(self.tab_name,{'type': 'send_message','id': "get_value",'param': "co2",'value': self.co2})

	async def met_callback(self,param):
		print(' met_callback',param)
		self.met = str(param.data) # Sacar dato de ROS en variable string de Python
		await self.channel_layer.group_send(self.tab_name,{'type': 'send_message','id': "get_value",'param': "met",'value': self.met})

	async def hyd_callback(self,param):
		print(' hyd_callback',param)
		self.hyd = str(param.data) # Sacar dato de ROS en variable string de Python
		await self.channel_layer.group_send(self.tab_name,{'type': 'send_message','id': "get_value",'param': "hyd",'value': self.hyd})

	async def connect(self):
		global c
		print('\n SENSORS CONNECTED')
		# -------------------------------------- Socket init --------------------------------------
		if(c==0):
			# ---------------------------------------- ROS init ----------------------------------------
			# PUBLISHERS
			print('  *** PUBLISHERS ***')
			print('   /robocol/sensorica/sensors_test_data -> String')
			self.test_pub = rospy.Publisher("/robocol/sensorica/sensors_test_data",String,queue_size=1)
			# self.pub_t_cmd = rospy.Publisher("/twist_test",Twist,queue_size=1)
			# SUBSCRIBERS
			print('  *** SUBSCRIBERS ***')
			print('   /robocol/sensorica/temperatura -> Float32')
			rospy.Subscriber("/robocol/sensorica/temperatura",Float32,async_to_sync(self.temp_callback))
			print('   /robocol/sensorica/ph-> Float32')
			rospy.Subscriber("/robocol/sensorica/ph",Float32,async_to_sync(self.ph_callback))
			print('   /robocol/sensorica/humedad-> Float32')
			rospy.Subscriber("/robocol/sensorica/humedad",Float32,async_to_sync(self.hum_callback))
			print('   /robocol/sensorica/monoxido-> Float32')
			rospy.Subscriber("/robocol/sensorica/monoxido",Float32,async_to_sync(self.co_callback))
			print('   /robocol/sensorica/metano-> Float32')
			rospy.Subscriber("/robocol/sensorica/metano",Float32,async_to_sync(self.met_callback))
			print('   /robocol/sensorica/hidrogeno-> Float32')
			rospy.Subscriber("/robocol/sensorica/hidrogeno",Float32,async_to_sync(self.hyd_callback))

			# print('  /robocol/sensorica/air-> Float32')
			# rospy.Subscriber("/robocol/sensorica/air",Float32,async_to_sync(self.air_callback))
			# print('  /robocol/sensorica/co2-> Float32')
			# rospy.Subscriber("/robocol/sensorica/co2",Float32,async_to_sync(self.co2_callback))
			c += 1
			print("")

		# # ## --------- ROS PUBLISH - PRUEBA ------- ##
		# test = String()
		# test.data = "JA"
		# self.test_pub.publish(test)
		# # ## --------- ROS PUBLISH - PRUEBA ------- ##
		
		print(self.test_pub)
		self.test_msg.data = str("ja")
		async_to_sync(self.test_pub.publish(self.test_msg))
		print("SUCCESS")

		# self.tab_name = self.scope["url_route"]["kwargs"]["tab_name"]
		self.tab_name = "sensorica"
		# self.tab_group_name = "chat_{}".format(self.tab_name)
		await self.channel_layer.group_add(self.tab_name, self.channel_name)
		print('  Channel layer')
		await self.accept()
		print('  Channel Accepted')


		# # self.send(text_data=json.dumps({'id': 'objects_values', 'action': "load", 'param':"temp", "value": str(20)}))
		# await self.channel_layer.group_send(
		# 	self.tab_name,
		# 	{
		# 		'type': 'send_message',
		# 		'id': "get_value",
		# 		'param': "temp",
		# 		'value': "40"
		# 	}
		# )

	async def disconnect(self, close_code):
		print(' SENSORS DISCONNECTED -> ','close_code: ',close_code)
		await self.channel_layer.group_discard(self.tab_name, self.channel_name)

	async def receive(self, text_data):
		print(' SENSORS RECEIVED -> ','text_data: ',text_data)
		text_data_json = json.loads(text_data)
		print('  JSON loads: ',text_data_json)
		tab_id = text_data_json['id']
		print('  id: ',tab_id)


		# ## --------- ROS PUBLISH - PRUEBA ------- ##
		# # text = text_data_json["value"] # Pide valor de llave "message" en diccionario text_data_json
		# # print(' Dictionary: ',text)
		# test = String()
		# test.data = "JAJA"
		# # self.test_msg.data = str(text) # Actualiza data en String() de ROS. (Inicializado más arriba)
		# # print(self.test_msg)
		# print(self.test_pub)
		# self.test_pub.publish(self.test_msg) # Publica mensaje tipo ROS en pub_cmd
		# print("end")
		# ## --------- ROS PUBLISH - PRUEBA ------- ##



		# Send message to room group
		await self.channel_layer.group_send(
			self.tab_name,
			{
				'type': 'send_message',
				'id': tab_id,
				'param': "temp",
				'value': "20"
			}
		)


		## --------- MANEJO DE MOTORES - EN DESARROLLO ------- ##
		# if id == 'move_servo':
		# 	objeto = text_data_json['object']
		# 	print(' object: ', objeto)
		# 	action = text_data_json['action']
		# 	print(' action: ', action)
		# 	param = text_data_json['param']
		# 	print(' param: ', param)
		# 	if param == 'temp':
		# 		text = str(self.temp)
		# 		print(' text:', text)
		# 		# message = Message(text=text, tab_name=self.tab_name)
		# 		# await self.channel_layer.group_send(self.tab_group_name,{"type": "chat_message", "message": MessageSerializer(message).data},)
		# 		self.temp_msg.data = str(text)
		# 		self.pub_cmd.publish(self.temp_msg)
		# 		self.twist_msg.linear.x = float(text)
		# 		self.pub_t_cmd.publish(self.twist_msg)
		# 		# self.send(text_data=json.dumps({'id': 'objects_values', 'action': "load", 'param':"ph", "value": str(text_data)}))
		# 		self.send(text_data=json.dumps({'id': 'objects_values', 'action': "load", 'param':"ph", "value": str(text)}))
		# 		print('jajajajaja')
		# 	if param == 'ph':
		# 		text = str(self.ph)
		# 		# message = Message(text=text, tab_name=self.tab_name)
		# 		# await self.channel_layer.group_send(self.tab_group_name,{"type": "chat_message", "message": MessageSerializer(message).data},)
		# 		# await self.send(text_data=json.dumps({'id': 'objects_values', 'values': objetos}))
		## --------- MANEJO DE MOTORES - EN DESARROLLO ------- ##		

		## --------- MANEJO DE BASE DE DATOS - EN DESARROLLO ------- ##
		# # message = Message(text=text, tab_name=self.scope["url_route"]["kwargs"]["tab_name"])
		# # message = Message(text=text, tab_name=self.tab_name)
		# # message.save()
		# # await self.channel_layer.group_send(self.tab_group_name,{"type": "chat_message", "message": MessageSerializer(message).data},)
		## --------- MANEJO DE BASE DE DATOS - EN DESARROLLO ------- ##


	async def send_message(self, event):
		print(' SENSORS MESSAGE: ',event)
		tab_id = event['id']
		param = event['param']
		value = event['value']
		print('  Message: ',tab_id)
		# Send message to WebSocket
		await self.send(text_data=json.dumps({
			'id': tab_id,
			'param': param,
			'value': value
		}))
		print('  Message sent.')
