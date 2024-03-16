from django import forms
from app.models import Condominio
from app.static_data import DIAS_SEMANA, BONIFICACAO

class CondominioForm(forms.ModelForm):
    senha = forms.CharField(max_length=100, widget=forms.PasswordInput)
    senha2 = forms.CharField(max_length=100, widget=forms.PasswordInput, label='Confirme sua senha' )
    dias_semana = forms.MultipleChoiceField(choices=DIAS_SEMANA, widget=forms.CheckboxSelectMultiple)
    bonificacao = forms.ChoiceField(widget=forms.RadioSelect, choices=BONIFICACAO, label='Bonificação')
    class Meta:
        model = Condominio
        exclude = (
            'created_at',
            'updated_at',
            'id',
            'identificador'
        )
