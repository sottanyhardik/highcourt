# Create your views here.
from django.views.generic import ListView

from data.models import CourtModel, PricingPackage


class IndexView(ListView):
    template_name = 'home.html'
    model = CourtModel

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        context['court_list'] = CourtModel.objects.all()
        context['packages'] = PricingPackage.objects.all()
        return context


class CourtListView(ListView):
    template_name = 'homelist.html'
    model = CourtModel

    def get_context_data(self, **kwargs):
        context = super(CourtListView, self).get_context_data(**kwargs)
        context['court_list'] = CourtModel.objects.all()
        return context