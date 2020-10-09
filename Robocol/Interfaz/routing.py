# Interfaz/routing.py
from django.urls import re_path
from django.urls import path
<<<<<<< HEAD
# from channels.routing import route
from Interfaz.consumers import HomeConsumer
=======
#from channels.routing import route
from Interfaz.consumers import HomeConsumer

>>>>>>> dd1328efa9cc1cb5b6a1d83b45533739c77f5b1f
from . import consumers

websocket_urlpatterns = [
    path('ws/interfaz/', consumers.HomeConsumer),
<<<<<<< HEAD
    # route('websocket.home',HomeConsumer),
=======
    #route('websocket.home',HomeConsumer),
>>>>>>> dd1328efa9cc1cb5b6a1d83b45533739c77f5b1f
    #re_path(r'ws/chat/(?P<room_name>\w+)/$', consumers.ChatConsumer),
]

channel_routing = [
    path('websocket.connect', ws_connect),
    path('websocket.disconnect', ws_disconnect),
    path("websocket.receive", ws_message),
]
