# from django.shortcuts import render

from Interfaz.serializers import MessageSerializer
from rest_framework import generics
from Interfaz.models import Message


# # Create your views here.
# def home(request):
#     return render(request, 'interfaz/home.html')

class MessagesListView(generics.ListAPIView):
    serializer_class = MessageSerializer

    def get_queryset(self):
        return Message.objects.filter(tab_name=self.kwargs["tab_name"])