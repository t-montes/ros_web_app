#!/usr/bin/env python3
import eventlet
import socketio
import random
import sys
import rospy
from std_msgs.msg import Float32
import time
# print(sys.path)
import Interfaz.socket_status
# import Interfaz.ROS_sensors as ROS_sensors
import Interfaz.ROS_sensors



def sensors(sio):
    print('  TESTING SENSORS')
    num = 1
    tem = 0.0
    # rospy.init_node('Interface_Sensors_Node')
    # def temperature_callback(param):
    #     tem = param.data
    #     sio.emit('measurements', {'temp':tem})
    #     print(param)

    # rospy.Subscriber('/temperatura', Float32, temperature_callback)


    @sio.on('get_value_sensors')
    def change_value(sid, data):
        print('\n SENSORS VALUE\n')
        # print('Change value: ',data)
        # test.receive_socket(sio,data,temp)
        # sio.emit('get_value', temp)
        # print('Message emitted correctly.')
    @sio.on('sensors_change_value')
    def load_values(sid,data):
        print('\n GET!\n')
        print('  sid:',sid)
        print('  data:',data)
        print('  object:',data['object'])
        print('  action:',data['action'])
        load_meas()

    def emit_value(temperature):
        sio.emit('measurements', {'temp':temperature})

    def load_meas():
        tem = random.randint(-10,   85) # TGS3870
        ph1 = random.randint(  0,   14)
        hum = random.randint(  0,  100)
        air = random.randint( 10, 1000)
        co1 = random.randint( 20, 2000) # MQ-7
        co2 = random.randint( 10, 1000)
        met = random.randint(300,10000) # MQ-4
        hyd = random.randint( 10, 1000) # MQ-8
        sio.emit('measurements', {'temp':tem,'ph':ph1,'humidity':hum,'air_quality':air,'co':co1,'co2':co2,'methane':met,'hydrogen':hyd})

    # sensors = Interfaz.ROS_sensors.Sensors()
    while True:
    # while not sensors.is_off():
        load_meas()
        # tem = sensors.get_value()
        # tem = num
    #     print('Emitting...')
    #     # tem = random.randint(-10,   85) # TGS3870
    #     # ph1 = random.randint(  0,   14)
    #     # hum = random.randint(  0,  100)
    #     # air = random.randint( 10, 1000)
    #     # co1 = random.randint( 20, 2000) # MQ-7
    #     # co2 = random.randint( 10, 1000)
    #     # met = random.randint(300,10000) # MQ-4
    #     # hyd = random.randint( 10, 1000) # MQ-8
    #     # sio.emit('measurements', {'temp':tem,'ph':ph1,'humidity':hum,'air_quality':air,'co':co1,'co2':co2,'methane':met,'hydrogen':hyd})
        # sio.emit('measurements', {'temp':tem})
        # num += 1
    #     # Interfaz.ROS_sensors.test()
    #     # print(sensors.get_value())
    #     # print('Sensors loop')
        # time.sleep(0.1)
