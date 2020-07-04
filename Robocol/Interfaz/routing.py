# Interfaz/routing.py
from django.urls import re_path
from django.urls import path

from . import consumers

websocket_urlpatterns = [
    path('ws/interfaz/', consumers.HomeConsumer),
    #re_path(r'ws/chat/(?P<room_name>\w+)/$', consumers.ChatConsumer),
]
