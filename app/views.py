from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User, Group
from django.contrib import auth, messages
from app.forms import Condominioform

def index(request):
    return render(request, 'app/index.html')


def cadastro(request):
    if request.method == 'POST':
        form = Condominioform(request.POST)
        if form.is_valid():
            senha = form.cleaned_data['senha']
            cnpj = form.cleaned_data['cnpj_condominio']
            email = form.cleaned_data['email']
            condominio = form.save()
            print(senha)
            admin_user = User.objects.create_user(username=cnpj, password=senha, email=email)
            admin_user.is_staff = False
            admin_user.save()
            operador_group = Group.objects.get(name='Condominio')
            operador_group.user_set.add(admin_user)
            form = Condominioform()
    else:
        form = Condominioform()
    return render(request, 'app/cadastro.html', {'form': form})


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