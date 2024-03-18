from django.contrib import admin
from app.models import Bairro, Condominio, Duvida, Parceiro
from import_export import resources
from import_export.admin import ImportExportModelAdmin
from import_export import resources, fields
from app.forms import CondominioForm

class BairroResource(resources.ModelResource):
    class Meta:
        model = Bairro
        fields = ('nome',)
        import_id_fields = []

class BairroAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = BairroResource


class CondominioAdmin(admin.ModelAdmin):
    form = CondominioForm
    list_display = ('nome', 'cnpj_condominio', 'nome_responsavel')


admin.site.register(Bairro, BairroAdmin)
admin.site.register(Condominio, CondominioAdmin)
admin.site.register(Duvida)
admin.site.register(Parceiro)
