# Interfaz/routing.py
# from django.urls import re_path
from django.urls import path
# from channels.routing import route
from Interfaz import consumers
# from . import
from Interfaz.ConsumerFiles.Rover import arm
from Interfaz.ConsumerFiles.Rover import ros
from Interfaz.ConsumerFiles.Rover import sensors
from Interfaz.ConsumerFiles.Rover import status
from Interfaz.ConsumerFiles.Rover import traction

websocket_urlpatterns = [
    path('ws/interfaz/', consumers.HomeConsumer),
    path('ws/brazo/piloto/', arm.ArmConsumer),
    path('ws/brazo/copiloto/', arm.ArmConsumer),
    path('ws/estadoTopicos/', ros.RosConsumer),
    path('ws/sensorica/', sensors.SensorsConsumer),
    path('ws/estado/', status.StatusConsumer),
    path('ws/traccion/', traction.TractionConsumer),
    # route('websocket.home',HomeConsumer),
    #re_path(r'ws/chat/(?P<room_name>\w+)/$', consumers.ChatConsumer),
]