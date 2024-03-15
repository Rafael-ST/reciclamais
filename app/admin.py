from django.contrib import admin
from app.models import Bairro, Condominio
from import_export import resources
from import_export.admin import ImportExportModelAdmin
from import_export import resources, fields

class BairroResource(resources.ModelResource):
    class Meta:
        model = Bairro
        fields = ('nome',)
        import_id_fields = []

class BairroAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = BairroResource


class CondominioAdmin(admin.ModelAdmin):
    list_display = ('nome', 'cnpj_condominio')


admin.site.register(Bairro, BairroAdmin)
admin.site.register(Condominio, CondominioAdmin)
