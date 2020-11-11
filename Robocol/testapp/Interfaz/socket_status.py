#!/usr/bin/env python3
import eventlet
import socketio

def status(sio):
    @sio.on('get_value_status')
    def change_value(sid, data):
        print('\n STATUS VALUE\n')
        sio.emit('send_value_status',1)
