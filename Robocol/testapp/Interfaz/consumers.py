#!/usr/bin/env python3
# Interfaz/consumers.py
print('Consumers...')
import os,sys
import json
import rospy
# from channels.generic.websocket import WebsocketConsumer
from channels.generic.websocket import AsyncWebsocketConsumer

# from std_msgs.msg import String
import threading
import time
# from std_msgs.msg import Float32
# import test_socket
# import eventlet
# import socketio
# print(sys.path)
# import Interfaz.ROS_funcs as ROS
# import Interfaz.socket_arm as socket_arm
# import Interfaz.socket_ros_info as socket_ros_info
# import Interfaz.socket_sensors as socket_sensors
# import Interfaz.socket_status as socket_status
# import Interfaz.socket_traction as socket_traction
# print('Importing Successfully.')

# def thread_socket():
#
#
# threading.Thread(target=thread_socket).start()

# interface = ROS.Interface()

print("  Initializating Node...")
# rospy.init_node('Interface_Node')
# rospy.loginfo("Node successfully initialized.")
# interface = ROS.Interface()
# # ROS threading
# def thread_ros():
#     print('\n ROS Init')
#     while not rospy.is_shutdown():
#         interface = ROS.Interface()
# 	# while True:
# 	# 	if rospy.is_shutdown():
# 	# 		print("Killing Django...")
# 	# 		os._exit(0)
# 	# 	time.sleep(500E-3)
# threading.Thread(target=thread_ros).start()

# def ws_message(message):
#     print('Message')
#
# def ws_connect(message):
#     print('Connected new socket')
#
# def ws_disconnect(message):
#     print('Disonnected new socket')

# temp = 0.0
#
# def callback(param):
#     global message
#     message = param.data
#
# def callback_temp(param):
#     global temp
#     temp = param.data
#     print(temp)
#
# print('INICIANDO NODO....')
# rospy.init_node('Django_node', anonymous=True)
# rospy.Subscriber('topic_subs', String, callback)
# rospy.Subscriber('/temperatura', Float32, callback_temp)
# pub_Connection = rospy.Publisher('topic_pub', String, queue_size=10)

# print('Creating socket as Server...')
# sio = socketio.Server(cors_allowed_origins='*')
# print('Socket Server created.')
# print('Creating WSGI App...')
# app = socketio.WSGIApp(sio)
# print('WSGI App created.')

# @sio.event
# def connect(sid, environ):
#     print('\n','connect ', sid,'\n')
# @sio.event
# def my_message(sid, data):
#     print('\n','message ', data,'\n')
# @sio.event
# def disconnect(sid):
#     print('\n','disconnect ', sid,'\n')

# def thread_sensors_socket():
#     port = 4444
#     print('Listening on port',port,'\n')
#     eventlet.wsgi.server(eventlet.listen(('',port)), app)

# threading.Thread(target=thread_sensors_socket).start()

# socket_arm.arm(sio)
# socket_ros_info.ros_info(sio)
# socket_sensors.sensors(sio)
# socket_status.status(sio)
# socket_traction.traction(sio)



# port = 4444
# print('Listening on port',port,'\n')
# eventlet.wsgi.server(eventlet.listen(('',port)), app)

#
# @sio.event
# def connect(sid, environ):
#     print('connect ', sid)
#
# @sio.event
# def my_message(sid, data):
#     print('message ', data)
#
# @sio.event
# def disconnect(sid):
#     print('disconnect ', sid)
#
# @sio.on('get_value')
# def change_value(sid, data):
#     global temp
#     test = test_socket()
#     # print('Change value: ',data)
#     test.receive_socket(sio,data,temp)
#     # sio.emit('get_value', temp)
#     # print('Message emitted correctly.')
#
#
# eventlet.wsgi.server(eventlet.listen(('', 4444)), app)

# Channel REDIS layer
# channel_layer = channels.layers.get_channel_layer()

# message = ''
# GUI_UPDATE_RATE = 100E-3

class HomeConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        # REVISAR COMO HACER ESTO
        # (AGREGUÉ os,time,threading, y falta el layer de channels)
        # self.room_name = 'e'+str(time.time())
		# self.room_group_name = 'bgUpdateConsumers_sensors'
		# async_to_sync(self.channel_layer.group_add)(self.room_group_name, self.channel_name)
        print('HomeConsumer connect')
        await self.accept()

    async def disconnect(self, close_code):
        print('HomeConsumer disconnect')

    async def receive(self, text_data):
        # global message
        print('HomeConsumer receive')
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        await self.send(text_data=json.dumps({'message': message}))

# REVISAR COMO HACER ESTO ( NUEVO THREAD DE EXIT HELPER)
# def threadGUIupdate_sensors():
# 	global message
# 	while True:
# 		options = {}
# 		#options['type'] = 'updateGUI'
# 		options['message'] = message
# 		async_to_sync(channel_layer.group_send)('bgUpdateConsumers_sensors',options)
# 		time.sleep(GUI_UPDATE_RATE)
#
# threading.Thread(target=threadGUIupdate_sensors).start()

# ROS auxiliary exit check
def ROS_exit_helper():
	while True:
		if rospy.is_shutdown():
			print("Killing Django...")
			os._exit(0)
		time.sleep(500E-3)
threading.Thread(target=ROS_exit_helper).start()
