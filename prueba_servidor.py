from flask import Flask, render_template
from flask_socketio import SocketIO, send
from flask_cors import CORS



app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")


@socketio.on('connect')
def test_connect():
    print('nueva conexion')

#@socketio.on('get_value')
#def handleMessage(msg):
#    print('Message: ' + msg)
#    send(msg, broadcast = True)

@socketio.on('stop_changing_value')
def handleMessage(msg):
    print('Message: stop_changing_value' + msg['mensaje'])

if __name__ == '__main__':
    socketio.run(app)	