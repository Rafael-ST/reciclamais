from django import forms
from app.models import Condominio
from app.static_data import DIAS_SEMANA, BONIFICACAO

class ContatoForm(forms.Form):
    nome = forms.CharField(label='Nome completo', max_length=200)
    email = forms.EmailField(label='Email')
    assunto = forms.CharField(label='Assunto', max_length=200)
    mensagem = forms.CharField(label='Mensagem', max_length=800, widget=forms.Textarea)

class CondominioForm(forms.ModelForm):
    senha = forms.CharField(max_length=100, widget=forms.PasswordInput)
    senha2 = forms.CharField(max_length=100, widget=forms.PasswordInput, label='Confirme sua senha' )
    # dias_semana = forms.MultipleChoiceField(choices=DIAS_SEMANA, widget=forms.CheckboxSelectMultiple)
    bonificacao = forms.ChoiceField(widget=forms.RadioSelect, choices=BONIFICACAO, label='Aceita participar do programa de bonificação?')
    observacao = forms.CharField(label='Gostaria de deixar alguma observação adicional?', widget=forms.Textarea(attrs={'placeholder': 'Sua observação aqui'}), required=False)
    class Meta:
        model = Condominio
        exclude = (
            'created_at',
            'updated_at',
            'id',
            'identificador'
        )
