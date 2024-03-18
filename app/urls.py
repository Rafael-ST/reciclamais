from django.urls import path
from app import views

urlpatterns = [
    path('', views.index, name='index'),
    path('cadastro', views.cadastro, name='cadastro'),
    path('cadastro_success', views.cadastro_success, name='cadastro_success'),
    # path('teste_login', views.teste_login, name='teste_login'),
    # path('loginurl', views.loginurl, name='loginurl'),
    path('faleconosco', views.faleconosco, name='faleconosco'),
    path('duvidasfrequentes', views.duvidasfrequentes, name='duvidasfrequentes'),
    path('areadocondominio', views.areadocondominio, name='areadocondominio'),
]