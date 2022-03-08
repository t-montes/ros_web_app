# Interfaz/routing.py
# Django imports
from django.urls import path
# Consumers
from Interfaz import consumers
from Interfaz.ConsumerFiles.Rover import arm
from Interfaz.ConsumerFiles.Rover import ros
from Interfaz.ConsumerFiles.Rover import sensors
from Interfaz.ConsumerFiles.Rover import status
from Interfaz.ConsumerFiles.Rover import traction
from Interfaz.ConsumerFiles.Rover import fpga
from Interfaz.ConsumerFiles.Rover import navegacion

websocket_urlpatterns = [
    #path('ws/interfaz/', consumers.HomeConsumer),
    #path('ws/brazo/piloto/', arm.ArmConsumer),
    #path('ws/brazo/copiloto/', arm.ArmConsumer),
    #path('ws/estadoTopicos/', ros.RosConsumer),
    #path('ws/sensorica/', sensors.SensorsConsumer),
    #path('ws/estado/', status.StatusConsumer),
    #path('ws/traccion/', traction.TractionConsumer),
    #path('ws/fpga/', fpga.FPGAConsumer)
    path('ws/interfaz/', consumers.HomeConsumer.as_asgi()),
    path('ws/brazo/piloto/', arm.ArmConsumer.as_asgi()),
    path('ws/brazo/copiloto/', arm.ArmConsumer.as_asgi()),
    path('ws/estadoTopicos/', ros.RosConsumer.as_asgi()),
    path('ws/sensorica/', sensors.SensorsConsumer.as_asgi()),
    path('ws/estado/', status.StatusConsumer.as_asgi()),
    path('ws/traccion/', traction.TractionConsumer.as_asgi()),
    path('ws/fpga/', fpga.FPGAConsumer.as_asgi()),
    path('ws/submarino/navegacion/', navegacion.NavegacionConsumer.as_asgi())
]