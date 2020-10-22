#!/usr/bin/env python3
import eventlet
import socketio

def ros_info(sio):
    @sio.on('get_value_ros_info')
    def change_value(sid, data):
        print('\n ROS INFO VALUE\n')
        sio.emit('send_value_ros_info',1)
