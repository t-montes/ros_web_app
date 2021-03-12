#!/usr/bin/env python3
import eventlet
import socketio

def arm(sio):
    @sio.on('get_value_arm')
    def change_value(sid, data):
        print('\n ARM VALUE\n')
        sio.emit('send_value_arm',1)
