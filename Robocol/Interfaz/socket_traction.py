#!/usr/bin/env python3
import eventlet
import socketio

def traction(sio):
    @sio.on('get_value_traction')
    def change_value(sid, data):
        print('\n TRACTION VALUE\n')
        sio.emit('send_value_traction',1)
