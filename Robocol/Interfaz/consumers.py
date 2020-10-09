#!/usr/bin/env python3
# Interfaz/consumers.py
print('Consumers...')
import os
import json
import rospy
from channels.generic.websocket import WebsocketConsumer
from std_msgs.msg import String
import threading
import time
from std_msgs.msg import Float32

import eventlet
import socketio

print('Importing Successfully.')

temp = 0.0

def callback(param):
    global message
    message = param.data

def callback_temp(param):
    global temp
    temp = param.data
    print(temp)

print('INICIANDO NODO....')
rospy.init_node('Django_node', anonymous=True)
rospy.Subscriber('topic_subs', String, callback)
rospy.Subscriber('/temperatura', Float32, callback_temp)
#pub_Connection = rospy.Publisher('topic_pub', String, queue_size=10)

sio = socketio.Server(cors_allowed_origins='*')
app = socketio.WSGIApp(sio)

@sio.event
def connect(sid, environ):
    print('connect ', sid)

@sio.event
def my_message(sid, data):
    print('message ', data)

@sio.event
def disconnect(sid):
    print('disconnect ', sid)

@sio.on('get_value')
def change_value(sid, data):
<<<<<<< HEAD
    global temp
    print('Change value: ',data)
    sio.emit('get_value', {object: str(temp)})
    print('Message emitted correctly.')

=======
    emit('joint_7_value', 5)
>>>>>>> dd1328efa9cc1cb5b6a1d83b45533739c77f5b1f

eventlet.wsgi.server(eventlet.listen(('', 4444)), app)

# Channel REDIS layer
# channel_layer = channels.layers.get_channel_layer()

message = ''
GUI_UPDATE_RATE = 100E-3



class HomeConsumer(WebsocketConsumer):
    def connect(self):
        # REVISAR COMO HACER ESTO
        # (AGREGUÉ os,time,threading, y falta el layer de channels)
        # self.room_name = 'e'+str(time.time())
		# self.room_group_name = 'bgUpdateConsumers_sensors'
		# async_to_sync(self.channel_layer.group_add)(self.room_group_name, self.channel_name)
        print('HomeConsumer connect')
        self.accept()

    def disconnect(self, close_code):
        print('HomeConsumer disconnect')

    def receive(self, text_data):
        global message
        print('HomeConsumer receive')
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        self.send(text_data=json.dumps({'message': message}))

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

#ROS auxiliary exit check
def ROS_exit_helper():
	while True:
		if rospy.is_shutdown():
			print("Killing Django...")
			os._exit(0)
		time.sleep(500E-3)
threading.Thread(target=ROS_exit_helper).start()










def ws_message(message):
    print('Message')

def ws_connect(message):
    print('Connected new socket')

def ws_disconnect(message):
    print('Disonnected new socket')
