from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User, Group
from django.contrib import auth, messages
from app.forms import CondominioForm, ContatoForm
from utils.email import send_email_in_thread
from django.contrib import messages
from app.models import Duvida

def index(request):
    return render(request, 'app/index.html')


def cadastro(request):
    if request.method == 'POST':
        form = CondominioForm(request.POST)
        if form.is_valid():
            nome = form.cleaned_data['nome']
            senha = form.cleaned_data['senha']
            cnpj = form.cleaned_data['cnpj_condominio']
            email = form.cleaned_data['email']
            nome_responsavel = form.cleaned_data['nome_responsavel']
            condominio = form.save()
            admin_user = User.objects.create_user(username=cnpj, password=senha, email=email, first_name=nome, last_name=nome_responsavel)
            admin_user.is_staff = False
            admin_user.save()
            operador_group = Group.objects.get(name='Condominio')
            operador_group.user_set.add(admin_user)
            return redirect('cadastro_success')
    else:
        form = CondominioForm()
    return render(request, 'app/cadastro.html', {'form': form})


def cadastro_success(request):
    return render(request, 'app/cadastro_success.html')

def faleconosco(request):
    form = ContatoForm()
    if request.method == 'POST':
        form = ContatoForm(request.POST)
        if form.is_valid():
            nome = form.cleaned_data['nome']
            email = form.cleaned_data['email']
            assunto = form.cleaned_data['assunto']
            msg = form.cleaned_data['mensagem']
            mensagem = f'{nome}<br>{msg}'
            send_email_in_thread('reciclamais@fortaleza.ce.gov.br', assunto, 'Mensagem do Fortaleza Bilingue', mensagem, email)
            messages.success(request, 'Mensagem enviada com sucesso')
            form = ContatoForm()
        else:
            messages.warning(request, 'Mensagem não enviada, tente novamente mais tarde')
            form = ContatoForm()
    return render(request, 'app/faleconosco.html', {'form': form})

def duvidasfrequentes(request):
    duvidas = Duvida.objects.all()
    return render(request, 'app/duvidasfrequentes.html', {'duvidas': duvidas})

def areadocondominio(request):
    return render(request, 'app/areadocondominio.html')

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