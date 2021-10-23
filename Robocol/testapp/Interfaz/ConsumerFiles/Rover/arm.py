#!/usr/bin/env python3
# # ROS imports
import rospy
from std_msgs.msg import String
from std_msgs.msg import Float32
from sensor_msgs.msg import Image
# Django imports
from channels.generic.websocket import AsyncWebsocketConsumer
import json
from asgiref.sync import async_to_sync
from asgiref.sync import sync_to_async
print('ARM LIBRARY')

c = 0 # CONTADOR PARA SOLO CARGAR LOS SUBSCRIBERS Y PUBLISHERS DE ROS UNA VEZ

### VARIABLES DE LOS PUBLISHERS DE ROS ###
pub_inverse_kinematics_rotation, pub_inverse_kinematics_motors, pub_inverse_kinematics_movements, pub_abort, pub_inverse_kinematics_percentage, pub_cam1  = None, None, None, None, None, None


### TOPICOS DE ROS ###

#Example: "joint_1:increase"
#Example: "joint_1:decrease"
#Example: "joint_1:stop"
topic_publish_inverse_kinematics_motors = '/robocol/interfaz/brazo/inverse_kinematics/motors'

#Example: "Yaw:CW"
#Example: "Yaw:CCW"
#Example: "Yaw:stop"
#Example: "Pitch:stop"
topic_publish_inverse_kinematics_rotation  = '/robocol/interfaz/brazo/inverse_kinematics/rotation'

#Example: "front"
#Example: "back"
#Example: "right"
#Example: "left"
#Example: "up"
#Example: "down"
#Example: "stop"
topic_publish_inverse_kinematics_movements  = '/robocol/interfaz/brazo/inverse_kinematics/movements'

#Example: "abort"
topic_publish_abort  = '/robocol/interfaz/brazo/abort'

#Example: "45"
#Example: "100"
#Example: "54"
topic_publish_inverse_kinematics_percentage  = '/robocol/interfaz/brazo/inverse_kinematics/percentage'

topic_publish_cam1 = "/cam1_signal"

#Explanation: csv of values of joints and greeper
#Explanation: "joint_1_value,joint_2_value,joint_3_value,...,joint_7_value,greeper_value"
#Example: "34,54,35,75,24,0,65,56"
topic_subscribe_direct_kinematics = '/robocol/brazo/interfaz/inverse_kinematics/motors'

topic_subscribe_cam1 = "/cam1"


### CLASE ARM CONSUMER ###

class ArmConsumer(AsyncWebsocketConsumer):
    print('ARM CONSUMER')

    async def connect(self):
        global c, pub_inverse_kinematics_motors, pub_inverse_kinematics_rotation, pub_inverse_kinematics_movements, pub_abort, pub_inverse_kinematics_percentage
        if(c==0):
            print('ARM CONNECTED')
            print("Initializing publishers")
            pub_inverse_kinematics_motors = rospy.Publisher(topic_publish_inverse_kinematics_motors, String, queue_size=1)
            pub_inverse_kinematics_rotation = rospy.Publisher(topic_publish_inverse_kinematics_rotation, String, queue_size=1)
            pub_inverse_kinematics_movements = rospy.Publisher(topic_publish_inverse_kinematics_movements, String, queue_size=1)
            pub_abort = rospy.Publisher(topic_publish_abort, String, queue_size=1)
            pub_inverse_kinematics_percentage = rospy.Publisher(topic_publish_inverse_kinematics_percentage, String, queue_size=1)
            pub_cam1 = rospy.Publisher(topic_publish_cam1, Float32, queue_size=1)
            print("Initializing subscriber")
            rospy.Subscriber(topic_subscribe_direct_kinematics, String, async_to_sync(self.callback_inverse_kinematics_motors))
            rospy.Subscriber(topic_subscribe_cam1, Image, async_to_sync(self.callback_cam1))
            c+=1
        await self.accept()

    async def receive(self, text_data):
        global c, pub_inverse_kinematics_motors, pub_inverse_kinematics_rotation, pub_inverse_kinematics_movements, pub_abort, pub_inverse_kinematics_percentage
        print('ARM RECEIVED')
        text_data = json.loads(text_data)
        print(text_data)
        id = text_data['id']
        if id == "inverse_kinematics_motors":
            msg = String()
            motor = text_data['motor']
            action = text_data['action']
            msg.data = motor + ":" + action
            print(msg.data)
            pub_inverse_kinematics_motors.publish(msg)
            print('Message published to topic')
        elif id == 'inverse_kinematics_rotation':
            msg = String()
            motor = text_data['motor']
            action = text_data['action']
            msg.data = motor + ":" + action
            print(msg.data)
            pub_inverse_kinematics_rotation.publish(msg)
            print('Message published to topic')
        elif id == 'inverse_kinematics_movements':
            msg = String()
            action = text_data['action']
            msg.data = action
            print(msg.data)
            pub_inverse_kinematics_movements.publish(msg)
            print('Message published to topic')
        elif id == 'abort':
            msg = String()
            msg.data = 'abort'
            print(msg.data)
            pub_abort.publish(msg)
            print('Message published to topic')
        elif id == 'inverse_kinematics_percentage':
            msg = String()
            percentage = text_data['percentage']
            msg.data = percentage
            print(msg.data)
            pub_inverse_kinematics_percentage.publish(msg)
            print('Message published to topic')
        elif id == 'cam1_signal':
            msg = Float32()
            signal = text_data['signal']
            msg.data = signal
            print(msg.data)
            pub_cam1.publish(msg)
            print('Message published to topic')

    async def callback_inverse_kinematics_motors(self, param):
        print("Arm received a inverse_kinematics_motors topic message")
        rospy.loginfo(rospy.get_caller_id() + "I heard %s", param.data)
        split = param.data.split(",")
        await self.send(text_data=json.dumps({'id': 'inverse_kinematics_motors', "joint_1":split[0],"joint_2":split[1],"joint_3":split[2],"joint_4":split[3],"joint_5":split[4],"joint_6":split[5],"gripper":split[6]}))

    async def callback_cam1(self, param):
        print("Arm received a cam1 topic message")
        print(param.msg)
    
    async def disconnect(self, close_code):
        print('ARM DISCONNECTED')
        print(close_code)