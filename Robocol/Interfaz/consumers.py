#!/usr/bin/env python3
# Interfaz/consumers.py
import os
import json
import rospy
from channels.generic.websocket import WebsocketConsumer
from std_msgs.msg import String
import threading
import time

#Channel REDIS layer
# channel_layer = channels.layers.get_channel_layer()

message = ''
GUI_UPDATE_RATE = 100E-3

def callback(param):
    global message
    message = param.data

rospy.init_node('Django_node', anonymous=True)
rospy.Subscriber('topic_subs', String, callback)
#pub_Connection = rospy.Publisher('topic_pub', String, queue_size=10)

class HomeConsumer(WebsocketConsumer):
    def connect(self):
        # REVISAR COMO HACER ESTO (AGREGUÉ os,time,threading, y falta el layer de channels)
        # self.room_name = 'e'+str(time.time())
		# self.room_group_name = 'bgUpdateConsumers_sensors'
		# async_to_sync(self.channel_layer.group_add)(self.room_group_name, self.channel_name)
        self.accept()

    def disconnect(self, close_code):
        pass

    def receive(self, text_data):
        global message
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
