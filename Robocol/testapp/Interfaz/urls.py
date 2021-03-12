# Interfaz/urls.py
from django.urls import path
from django.views.generic import TemplateView

# from . import views

urlpatterns = [
	path("", TemplateView.as_view(template_name="index.html")),
    path("<room_name>/", TemplateView.as_view(template_name="index.html")),
    # path("api/messages/<room_name>/", MessagesListView.as_view()),
    # path('', views.home, name='home')
    # path("", TemplateView.as_view(template_name="index.html")),
]
