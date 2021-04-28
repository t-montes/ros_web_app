#!/usr/bin/env python3
# Interfaz/consumers.py
# Python imports
import os,sys
import threading
import time
import json
# Django imports
# from channels.generic.websocket import WebsocketConsumer
from channels.generic.websocket import AsyncWebsocketConsumer
# ROS imports
import rospy
from std_msgs.msg import String
from std_msgs.msg import Float32
# SocketIO imports
# import eventlet
# import socketio

# Channel REDIS layer
# channel_layer = channels.layers.get_channel_layer()

print("  Initializating Node...")
rospy.init_node('Interface_Node')
rospy.loginfo("Node successfully initialized.")
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

class HomeConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        print('HOME CONNECTED\n')
        # -------------------------------------- Socket init --------------------------------------
        self.tab_name = self.scope["url_route"]["kwargs"]["tab_name"]
        print(' tab_name: ',self.tab_name)
        self.tab_group_name = "chat_{}".format(self.tab_name)
        await self.channel_layer.group_add(self.tab_group_name, self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        print('HOME DISCONNECTED -> ','close_code: ',close_code)
        await self.channel_layer.group_discard(self.tab_group_name, self.channel_name)

    async def receive(self, text_data):
        print('HOME RECEIVED -> ','text_data: ',text_data)
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        await self.send(text_data=json.dumps({'message': message}))

# ROS auxiliary exit check
def ROS_exit_helper():
	while True:
		if rospy.is_shutdown():
			print("Killing Django...")
			os._exit(0)
		time.sleep(500E-3)
threading.Thread(target=ROS_exit_helper).start()


# REVISAR SI ALGO DE AQUÍ PARA ABAJO SIRVE, SINO IR BORRANDO
# def ws_message(message):
#     print('Message')
#
# def ws_connect(message):
#     print('Connected new socket')
#
# def ws_disconnect(message):
#     print('Disonnected new socket')

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


# message = ''
# GUI_UPDATE_RATE = 100E-3


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

