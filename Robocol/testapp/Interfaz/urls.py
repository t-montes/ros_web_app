# Interfaz/urls.py
from Interfaz.views import MessagesListView
from django.urls.conf import path
from django.views.generic import TemplateView

# from . import views

urlpatterns = [
	path("", TemplateView.as_view(template_name="index.html")),
    path("<tab_name>/", TemplateView.as_view(template_name="index.html")),
    path("api/messages/<tab_name>/", MessagesListView.as_view()),
    # path('', views.home, name='home')
    # path("", TemplateView.as_view(template_name="index.html")),
]
