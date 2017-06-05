from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static

from . import views

urlpatterns = [
    url(r'courts/$', views.CourtListView.as_view(), name='courts_list'),
    url(r'search/$', views.court_data, name='search'),
    url(r'^$', views.IndexView.as_view(), name='index'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

