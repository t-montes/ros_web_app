#!/usr/bin/env python3
import rospy
import random
from std_msgs.msg import Float32
import Interfaz.socket_sensors as socket_sensors

def test():
    print('JAJAJAJAJAJAJAJ')

class Sensors(object):

    def __init__(self):
        self.temp = 0.0
        print('  ROS Sensors ROS node init...')
        rospy.init_node('Interface_Sensors_Node')
        print('  Sensors ROS Subscribers init...')
        rospy.Subscriber('/temperatura', Float32, self.temperature_callback)

    def temperature_callback(self,param):
        # print(param)
        self.temp = param.data

    def get_value(self):
        # return self.temp
        return random.randint(-10,85)

    def test2(self):
        return self.temp

    def is_off(self):
        return rospy.is_shutdown()
