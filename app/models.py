from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
import uuid
from app.validations import validate_CNPJ, validate_CPF
from app.static_data import TURNO, CHAVE_PIX, INDICACAO, RESPONSAVEL, BONIFICACAO
from django.db.models.signals import pre_save
from django.dispatch import receiver

class BaseModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Criado em')
    updated_at = models.DateTimeField(auto_now=True, null=True, verbose_name="Atualizado em")

    class Meta:
        abstract = True


class Bairro(BaseModel):
    nome = models.CharField(verbose_name='Bairro', max_length=100)

    def __str__(self):
        return self.nome
    

    class Meta:
        verbose_name = 'Bairro'
        verbose_name_plural = 'Bairros'


class Condominio(BaseModel):
    nome = models.CharField(verbose_name='Nome do Condomínio', max_length=100)
    cnpj_condominio = models.CharField(max_length=30, verbose_name='CNPJ Condomínio', validators=[validate_CNPJ], unique='True', null=True)
    ddd = models.PositiveIntegerField(verbose_name='DDD', validators=[MinValueValidator(10), MaxValueValidator(99)])
    telefone = models.CharField(verbose_name='Telefone', max_length=20)
    whatsapp = models.BooleanField(verbose_name='É Whatsapp?')
    email = models.CharField(verbose_name='Email', max_length=200)
    qtd_habitacional = models.PositiveIntegerField(verbose_name='Unidades habitacionais serão atendidas')
    # primeira_coleta = models.DateField(verbose_name='Data da primeira coleta')
    turno = models.CharField(verbose_name='Turno de preferência', max_length=100, choices=TURNO)
    tipo_pix = models.CharField(verbose_name='Tipo de chave pix', max_length=50, choices=CHAVE_PIX)
    chave_pix = models.CharField(verbose_name='Chave pix',max_length=300)
    observacao = models.TextField(verbose_name='Observação', max_length=500, null=True, blank=True)
    indicacao = models.CharField(verbose_name='Onde conheceu o Recicla+?', max_length=200, choices=INDICACAO)
    responsavel = models.CharField(verbose_name='Tipo de Responsável', max_length=100, choices=RESPONSAVEL)
    nome_responsavel = models.CharField(verbose_name='Nome do Responsável', max_length=100)
    contato_responsavel = models.CharField(verbose_name='Contato do Responsável', max_length=20, null=True)
    # cpf_responsavel = models.CharField(max_length=30, verbose_name='CPF Responsável', validators=[validate_CPF], unique='True', blank=True, null=True)
    # cnpj = models.CharField(max_length=30, verbose_name='CNPJ Responsável', validators=[validate_CNPJ], unique='True', blank=True, null=True)
    cep = models.CharField(verbose_name='CEP', max_length=10, null=True)
    logradouro = models.CharField(verbose_name='Logradouro', max_length=100)
    numero = models.PositiveIntegerField(verbose_name='Número')
    complemento = models.CharField(verbose_name='Complemento', max_length=150, null=True, blank=True)
    bairro = models.ForeignKey('Bairro', verbose_name="Bairro", on_delete=models.PROTECT)
    ponto_referencia = models.CharField(verbose_name='Ponto de referência', max_length=150, null=True, blank=True)
    identificador = models.IntegerField(verbose_name='Identificador', default=0)
    dias_semana = models.CharField(verbose_name='Dias da Semana', max_length=10, null=True)
    zelador = models.CharField(verbose_name='Nome do Zelador', max_length=100, null=True, blank=True)
    bonificacao = models.CharField(verbose_name='Bonificação', max_length=50, null=True, choices=BONIFICACAO)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if self.dias_semana:
            self.dias_semana = eval(self.dias_semana)

    def __str__(self):
        return self.nome
    

    class Meta:
        verbose_name = 'Condomínio'
        verbose_name_plural = 'Condomínios'


@receiver(pre_save, sender=Condominio)
def set_next_identificador(sender, instance, **kwargs):
    if not instance.identificador:
        last_condominio = Condominio.objects.order_by('-identificador').first()
        if last_condominio:
            instance.identificador = last_condominio.identificador + 1
        else:
            # Se não houver nenhum gerador no banco de dados ainda,
            # você pode começar com 1 ou qualquer outro número que desejar.
            instance.identificador = 1


class Duvida(BaseModel):
    pergunta = models.CharField(verbose_name='Pergunta', max_length=150)
    resposta = models.CharField(verbose_name='Resposta', max_length=150)

    def __str__(self):
        return self.pergunta

    class Meta:
        verbose_name = 'Duvida'
        verbose_name_plural = 'Duvidas'


class Parceiro(BaseModel):
    nome = models.CharField(verbose_name='Parceiro', max_length=50)
    imagem = models.ImageField(verbose_name='Imagem', upload_to='parceiros/')
    link = models.CharField(verbose_name='Link', max_length=150)

    def get_url(self):
        return self.link if self.link else '#'

    def __str__(self):
        return self.nome
