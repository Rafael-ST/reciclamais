# Generated by Django 5.0.3 on 2024-03-17 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_alter_condominio_chave_pix_alter_condominio_tipo_pix'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='condominio',
            name='turno',
        ),
        migrations.AlterField(
            model_name='condominio',
            name='bonificacao',
            field=models.CharField(choices=[('0', 'Desejo participar do programa de bonificação'), ('0', 'Desejo doar os recicláveis para associações de catadores abrindo mão da bonificação')], max_length=50, null=True, verbose_name='Bonificação'),
        ),
        migrations.AlterField(
            model_name='condominio',
            name='contato_responsavel',
            field=models.CharField(max_length=20, null=True, verbose_name='Contato do responsável(telefone)'),
        ),
        migrations.AlterField(
            model_name='condominio',
            name='observacao',
            field=models.TextField(blank=True, max_length=500, null=True, verbose_name='Gostaria de deixar alguma observação adicional?'),
        ),
        migrations.AlterField(
            model_name='condominio',
            name='ponto_referencia',
            field=models.CharField(blank=True, max_length=150, null=True, verbose_name='Qual ponto de referência do condomínio?'),
        ),
        migrations.AlterField(
            model_name='condominio',
            name='qtd_habitacional',
            field=models.PositiveIntegerField(verbose_name='Quantas unidades há no condomínio?'),
        ),
    ]
