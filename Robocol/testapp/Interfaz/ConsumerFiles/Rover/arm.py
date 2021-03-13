#!/usr/bin/env python3
# # ROS imports
import rospy
from std_msgs.msg import String
from std_msgs.msg import Float32
# Django imports
from channels.generic.websocket import AsyncWebsocketConsumer
import json
print('ARM LIBRARY')

#variables to simulate the communication with ROS
#0-6 represent the joints values
#7 represents the greeper
objetos = [50] * 8
change = False
#pub = rospy.Publisher('', Float64)

class ArmConsumer(AsyncWebsocketConsumer):
    print('ARM CONSUMER')

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

        message = Message(text=text, tab_name=self.tab_name)
        # message.save()
        async_to_sync(self.channel_layer.group_send)(self.tab_group_name,{"type": "chat_message", "message": MessageSerializer(message).data},)

    async def connect(self):
        print('ARM CONNECTED')
        try:
            #brazo()
            await self.accept()
        except rospy.ROSInterruptException:
            pass
    async def disconnect(self, close_code):
        print('ARM DISCONNECTED')
        print(close_code)

    #def brazo():
    #    rospy.init_node('brazo_interfaz', anonymous=True)
    #    rospy.Subscriber("Orientacion", String, callbackOrientacion)
    #    rospy.Subscriber("Distancia", String, callbackDistancia)
    #    rospy.Subscriber("Agarre", String, callbackAgarre)
     #   rospy.Subscriber("Posicion", String, callbackPosicion)


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


    #async def chat_message(self, event):
        #print('ARM MESSAGE')
        #print(event)
        #print('')
