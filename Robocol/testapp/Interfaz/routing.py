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

websocket_urlpatterns = [
    path('ws/interfaz/', consumers.HomeConsumer),
    path('ws/brazo/piloto/', arm.ArmConsumer),
    path('ws/brazo/copiloto/', arm.ArmConsumer),
    path('ws/estadoTopicos/', ros.RosConsumer),
    path('ws/sensorica/', sensors.SensorsConsumer),
    path('ws/estado/', status.StatusConsumer),
    path('ws/traccion/', traction.TractionConsumer),
    path('ws/fpga/', fpga.FPGAConsumer)
]