
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include("api.urls")),

    #     # Serve index.html pour toutes les autres routes
    # re_path(r'^.*$', TemplateView.as_view(template_name="index.html")),
] 

# Servir les fichiers media en développement uniquement
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Catch-all pour le frontend React (après les media/api/admin)
urlpatterns += [
    re_path(r'^.*$', TemplateView.as_view(template_name="index.html")),
]