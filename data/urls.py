from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'courts/$', views.CourtListView.as_view(), name='courts_list'),
    url(r'search/$', views.court_data, name='search'),
    url(r'^$', views.IndexView.as_view(), name='index'),
]
