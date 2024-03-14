from django.urls import path
from app import views

urlpatterns = [
    path('', views.index, name='index'),
    path('teste_login', views.teste_login, name='teste_login'),
    path('loginurl', views.loginurl, name='loginurl'),
]