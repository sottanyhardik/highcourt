from django.conf.urls import url
from core import views as core_views

urlpatterns = [
    url(r'signup/$', core_views.signup, name='account_activation_sent'),
    url(r'^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        core_views.activate, name='activate'),
]