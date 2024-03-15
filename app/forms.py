from django import forms
from app.models import Condominio

class Condominioform(forms.ModelForm):
    senha = forms.CharField(max_length=100, widget=forms.PasswordInput)
    class Meta:
        model = Condominio
        exclude = (
            'created_at',
            'updated_at',
            'id',
            'identificador'
        )
