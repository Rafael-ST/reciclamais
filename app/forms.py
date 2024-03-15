from django import forms
from app.models import Condominio
from app.static_data import DIAS_SEMANA

class CondominioForm(forms.ModelForm):
    senha = forms.CharField(max_length=100, widget=forms.PasswordInput)
    dias_semana = forms.MultipleChoiceField(choices=DIAS_SEMANA)
    class Meta:
        model = Condominio
        exclude = (
            'created_at',
            'updated_at',
            'id',
            'identificador'
        )
