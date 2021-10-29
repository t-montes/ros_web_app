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
# Variable de ROS
boxes_pub, disp_pub, load_pub, pos_eva_pub, vib_pub, test_pub = "","","","","",""

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
	eva_pos = 0
	ang_dep = 0
	boxes_state = 0
	
	# ROS CALLBACKS
	async def temp_callback(self,param):
		self.temp = str(param.data) # Sacar dato de ROS en variable string de Python
		await self.channel_layer.group_send(self.tab_name,{'type': 'send_message','id': "get_value",'param': "temp",'value': self.temp})

	async def ph_callback(self,param):
		self.ph = str(param.data) # Sacar dato de ROS en variable string de Python
		await self.channel_layer.group_send(self.tab_name,{'type': 'send_message','id': "get_value",'param': "ph",'value': self.ph})

	async def hum_callback(self,param):
		self.hum = str(param.data) # Sacar dato de ROS en variable string de Python
		await self.channel_layer.group_send(self.tab_name,{'type': 'send_message','id': "get_value",'param': "hum",'value': self.hum})

	async def air_callback(self,param):
		self.air = str(param.data) # Sacar dato de ROS en variable string de Python
		await self.channel_layer.group_send(self.tab_name,{'type': 'send_message','id': "get_value",'param': "air",'value': self.air})

	async def co_callback(self,param):
		self.co = str(param.data) # Sacar dato de ROS en variable string de Python
		await self.channel_layer.group_send(self.tab_name,{'type': 'send_message','id': "get_value",'param': "co",'value': self.co})

	async def co2_callback(self,param):
		self.co2 = str(param.data) # Sacar dato de ROS en variable string de Python
		await self.channel_layer.group_send(self.tab_name,{'type': 'send_message','id': "get_value",'param': "co2",'value': self.co2})

	async def met_callback(self,param):
		self.met = str(param.data) # Sacar dato de ROS en variable string de Python
		await self.channel_layer.group_send(self.tab_name,{'type': 'send_message','id': "get_value",'param': "met",'value': self.met})

	async def hyd_callback(self,param):
		self.hyd = str(param.data) # Sacar dato de ROS en variable string de Python
		await self.channel_layer.group_send(self.tab_name,{'type': 'send_message','id': "get_value",'param': "hyd",'value': self.hyd})

	async def eva_pos_callback(self,param):
		self.eva_pos = str(param.data) # Sacar dato de ROS en variable string de Python
		await self.channel_layer.group_send(self.tab_name,{'type': 'send_message','id': "get_value",'param': "eva_pos",'value': self.eva_pos})

	async def ang_dep_callback(self,param):
		self.ang_dep = str(param.data)
		await self.channel_layer.group_send(self.tab_name,{'type': 'send_message','id': "get_value",'param': "ang_dep",'value': self.ang_dep})

	async def connect(self):
		global c, boxes_pub, disp_pub, load_pub, pos_eva_pub, vib_pub,test_pub
		print('\n SENSORS CONNECTED')
		# -------------------------------------- Socket init --------------------------------------
		if(c==0):
			# ---------------------------------------- ROS init ----------------------------------------
			# PUBLISHERS
			print('  *** PUBLISHERS ***')
			print('   /robocol/sensorica/mover_servos_cajas -> UInt8')
			boxes_pub = rospy.Publisher("/robocol/sensorica/mover_servos_cajas",UInt8,queue_size=1)
			print('   /robocol/sensorica/dispensador_eva -> UInt8')
			disp_pub = rospy.Publisher("/robocol/sensorica/dispensador_eva",UInt8,queue_size=1)
			print('   /robocol/sensorica/celda_carga -> Float32')
			load_pub = rospy.Publisher("/robocol/sensorica/celda_carga",Float32,queue_size=1)
			print('   /robocol/sensorica/posicion_actuador -> Float32')
			pos_eva_pub = rospy.Publisher("/robocol/sensorica/posicion_actuador",Float32,queue_size=1)
			print('   /robocol/sensorica/vibracion_motores -> UInt8')
			vib_pub = rospy.Publisher("/robocol/sensorica/vibracion_motores",UInt8,queue_size=1)
			print('   /robocol/sensorica/sensors_test_data -> String')
			test_pub = rospy.Publisher("/robocol/sensorica/sensors_test_data",String,queue_size=1)
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
			print('   /robocol/sensorica/posicion_actual_eva-> Float32')
			rospy.Subscriber("/robocol/sensorica/posicion_actual_eva",Float32,async_to_sync(self.eva_pos_callback))
			print('   /robocol/sensorica/angulo_deposito-> Float32')
			rospy.Subscriber("/robocol/sensorica/angulo_deposito",Float32,async_to_sync(self.ang_dep_callback))
			# print('  /robocol/sensorica/air-> Float32')
			# rospy.Subscriber("/robocol/sensorica/air",Float32,async_to_sync(self.air_callback))
			# print('  /robocol/sensorica/co2-> Float32')
			# rospy.Subscriber("/robocol/sensorica/co2",Float32,async_to_sync(self.co2_callback))
			c += 1
			print("")

		self.tab_name = "sensorica"
		await self.channel_layer.group_add(self.tab_name, self.channel_name)
		await self.accept()

	async def disconnect(self, close_code):
		print(' SENSORS DISCONNECTED -> ','close_code: ',close_code)
		await self.channel_layer.group_discard(self.tab_name, self.channel_name)

	async def receive(self, text_data):
		global boxes_pub, disp_pub, load_pub, pos_eva_pub, vib_pub
		print(' SENSORS RECEIVED -> ','text_data: ',text_data)
		text_data_json = json.loads(text_data)
		tab_id = text_data_json['id']
		param = text_data_json['param']
		value = text_data_json['value']

		if(param=="mix"):
			mix_msg = UInt8()
			mix_msg.data = int(value)
			vib_pub.publish(mix_msg)
		if(param=="leave"):
			leave_msg = UInt8()
			leave_msg.data = int(value)
			disp_pub.publish(leave_msg)
		if(tab_id=="move"):
			move_msg = Float32()
			if(param=="up"):
				self.eva_pos += 1
				move_msg.data = self.eva_pos
			elif(param=="down"):
				self.eva_pos -= 1
				move_msg.data = self.eva_pos
			elif(param=="stop"):
				print('STOP')
				move_msg.data = self.eva_pos
			pos_eva_pub.publish(move_msg)
		if(tab_id=="box"):
			box_msg = UInt8()
			if(param=="box1"):
				if(value=="1"):
					self.boxes_state += 16
					print(self.boxes_state)
				elif(value=="0"):
					self.boxes_state -= 16
			elif(param=="box2"):
				if(value=="1"):
					self.boxes_state += 32
				elif(value=="0"):
					self.boxes_state -= 32
			elif(param=="box3"):
				if(value=="1"):
					self.boxes_state += 64
				elif(value=="0"):
					self.boxes_state -= 64
			elif(param=="box4"):
				if(value=="1"):
					self.boxes_state += 128
				elif(value=="0"):
					self.boxes_state -= 128
			box_msg.data = self.boxes_state
			boxes_pub.publish(box_msg)

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
		# Send message to WebSocket
		await self.send(text_data=json.dumps({
			'id': event['id'],
			'param': event['param'],
			'value': event['value']
		}))
