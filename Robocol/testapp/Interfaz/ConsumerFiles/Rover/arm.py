#!/usr/bin/env python3
# # ROS imports
import rospy
from std_msgs.msg import String
from std_msgs.msg import Float32
#import .arm_publisher as arm_publisher
# Django imports
from channels.generic.websocket import AsyncWebsocketConsumer
import json
print('ARM LIBRARY')


objetos = [50] * 8
change = False

class ArmConsumer(AsyncWebsocketConsumer):
    print('ARM CONSUMER')

    async def connect(self):
        print('ARM CONNECTED')
        
        print("Initializing publisher")
        self.pub = rospy.Publisher('/interface_events_arm_topic', String, queue_size=1)
        print("Initializing subscriber")
        rospy.Subscriber("/robocol_events_arm_topic", String, self.callback)
        print("Initializing message")
        #msg = String()
        #msg.data = "Hello world!"
        #pub.publish(msg)
        #print("Initializing rate")
        #rate = rospy.Rate(1000000000) # 10hz
        await self.accept()
        #contador = 0
        #while contador < 5:
        #    print("Publishing")
        #    pub.publish(msg)
        #    print("Sleeping")
        #     rate.sleep()
        #    contador = contador + 1
        #arm_publisher.main()
        

            
    async def disconnect(self, close_code):
        print('ARM DISCONNECTED')
        print(close_code)


    async def receive(self, text_data):
        print('ARM RECEIVED')
        text_data = json.loads(text_data)
        id = text_data['id']
        if id == 'change_value':
            objeto = text_data['object']
            action = text_data['action']
            change = True
            print('cambiar valor, con acción ' + action + ' al objeto ' + objeto)
            if objeto == 'joint_1':
                objetos[0] = objetos[0] + 1
            elif objeto == 'joint_2':
                objetos[1] = objetos[1] + 1
            elif objeto == 'joint_3':
                objetos[2] = objetos[2] + 1
            elif objeto == 'joint_4':
                objetos[3] = objetos[3] + 1
            elif objeto == 'joint_5':
                objetos[4] = objetos[4] + 1
            elif objeto == 'joint_6':
                objetos[5] = objetos[5] + 1
            elif objeto == 'joint_7':
                objetos[6] = objetos[6] + 1
            elif objeto == 'greeper':
                objetos[7] = objetos[7] + 1
            await self.send(text_data=json.dumps({'id': 'objects_values', 'values': objetos}))
            
            print('done')
        elif id == 'stop_changing_value':
            print('dejar de cambiar valor')
            change = False
        elif id == 'get_values':
            print('enviar el valor de los objetos')
            await self.send(text_data=json.dumps({'id': 'values', 'values': objetos}))


    async def change_value(objeto: str, action: str):
        while change == True:
            print('jelouuu')
            if objeto == 'joint_1':
                objetos[0] = objetos[0] + 1
            elif objeto == 'joint_2':
                objetos[1] = objetos[1] + 1
            elif objeto == 'joint_3':
                objetos[2] = objetos[2] + 1
            elif objeto == 'joint_4':
                objetos[3] = objetos[3] + 1
            elif objeto == 'joint_5':
                objetos[4] = objetos[4] + 1
            elif objeto == 'joint_6':
                objetos[5] = objetos[5] + 1
            elif objeto == 'joint_7':
                objetos[6] = objetos[6] + 1
            elif objeto == 'greeper':
                objetos[7] = objetos[7] + 1
            await self.send(text_data=json.dumps({'id': 'objects_values', 'values': objetos}))
            print('done')

    def callback(self, param):
        print("Arm received a topic message")
        msg = String()
        msg.data = "Hello world!"
        self.pub.publish(msg)
        rospy.loginfo(rospy.get_caller_id() + "I heard %s", param.data)