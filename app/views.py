from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib import auth, messages

def index(request):
    return render(request, 'app/index.html')


@login_required
def teste_login(request):
    return render(request, 'app/teste_login.html')


def loginurl(request):
    if request.method == 'POST':
        email = request.POST['email']
        senha = request.POST['senha']
        if email == "" or senha == "":
            return redirect('loginurl')
        if (User.objects.filter(username=email)).exists():
            nome = User.objects.filter(username=email).values_list('username', flat=True).get()
            user = auth.authenticate(request, username=nome, password=senha)
            if user is not None:
                auth.login(request, user)
                return redirect('index')
            else:
                messages.warning(request, 'Usuário e/ou senha inválido(s)')
                return redirect('loginda')

        else:
            messages.warning(request, 'Usuário e/ou senha inválido(s)')
            return redirect('loginurl')
    else:
        return render(request, 'app/loginurl.html')
    return render(request, 'app/loginurl.html')