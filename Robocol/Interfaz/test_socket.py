
class test_socket(object):
    def __init__(self):
        print("Initializating Test...")
    def receive_socket(self,sio,data,temp):
        print('Change value: ',data)
        # sio.emit('get_value', {object: str(temp)})
        print(sio)
        sio.emit('get_value', {'response': temp})
        print('Message emitted correctly.')
