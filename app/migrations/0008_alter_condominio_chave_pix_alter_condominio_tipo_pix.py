# Generated by Django 5.0.3 on 2024-03-16 21:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_condominio_bonificacao'),
    ]

    operations = [
        migrations.AlterField(
            model_name='condominio',
            name='chave_pix',
            field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Chave pix'),
        ),
        migrations.AlterField(
            model_name='condominio',
            name='tipo_pix',
            field=models.CharField(blank=True, choices=[('0', 'CPF'), ('1', 'CNPJ'), ('2', 'Email'), ('3', 'Número telefônico'), ('4', 'Chave Aleatória')], max_length=50, null=True, verbose_name='Tipo de chave pix'),
        ),
    ]
