#!/usr/bin/env python3
# # ROS imports
# import rospy
# from std_msgs.msg import String
# from std_msgs.msg import Float32
# Django imports
from channels.generic.websocket import AsyncWebsocketConsumer
print('TRACTION LIBRARY')


class TractionConsumer(AsyncWebsocketConsumer):
    print('TRACTION CONSUMER')
    # # CALLBACKS
    # def end_effector_state(param):
    #     print('Arm Callback')
    #     print(param)
    #     print('')
    # # PUBLISHERS
    # print('Publishing to /end_effector_command')
    # pub_cmd = rospy.Publisher("/end_effector_command",Float32,queue_size=1)
    # # SUBSCRIBERS
    # print('Publishing to /end_effector_state')
    # rospy.Subscriber("/end_effector_state",String,end_effector_state)
    # print('')

    async def connect(self):
        print('TRACTION CONNECTED')
        print('')
        await self.accept()
    async def disconnect(self, close_code):
        print('TRACTION DISCONNECTED')
        print(close_code)
        print('')
    async def receive(self, text_data):
        print('TRACTION RECEIVED')
        print(text_data)
        print('')
    async def chat_message(self, event):
        print('TRACTION MESSAGE')
        print(event)
        print('')
