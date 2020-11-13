#!/usr/bin/env python3
# # ROS imports
import rospy
from std_msgs.msg import String
# from std_msgs.msg import Float32
# Django imports
from channels.generic.websocket import AsyncWebsocketConsumer
print('SENSORS LIBRARY')


class SensorsConsumer(AsyncWebsocketConsumer):
    print('SENSORS CONSUMER')
    # # CALLBACKS
    # def end_effector_state(param):
    #     print('Arm Callback')
    #     print(param)
    #     print('')
    # PUBLISHERS
    print('Publishing to /end_effector_command')
    pub_cmd = rospy.Publisher("/sensors_data",String,queue_size=1)
    # # SUBSCRIBERS
    # print('Publishing to /end_effector_state')
    # rospy.Subscriber("/end_effector_state",String,end_effector_state)
    # print('')

    async def connect(self):
        print('SENSORS CONNECTED')
        print('')
        await self.accept()
    async def disconnect(self, close_code):
        print('SENSORS DISCONNECTED')
        print(close_code)
        print('')
    async def receive(self, text_data):
        print('SENSORS RECEIVED')
        print(text_data)
        msg = String()
        # print(' type: ',dict(text_data))
        # 'msg: ',text_data['message'],
        msg.data = text_data
        # self.pub_cmd.publish(msg)
        print('')
    async def chat_message(self, event):
        print('SENSORS MESSAGE')
        print(event)
        print('')
