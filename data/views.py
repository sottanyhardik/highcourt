# Create your views here.
from django.http import JsonResponse
from django.views.generic import ListView, TemplateView
from django.http import HttpResponse
from django.template import loader
from data.models import CourtModel, PricingPackage
from utils.short_script import citation_fetch


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
        courts = CourtModel.objects.all().values('name')
        context['court_data_list'] = [data['name'] for data in courts]
        context['citation_range'] = range(1950, 2018)
        context['act_year_range'] = range(1834, 2018)
        context['citation_volume'] = range(0, 201)
        return context

    def post(self, request, *args, **kwargs):
        journal_name = self.request.POST.get('name','')
        journal_year = self.request.POST.get('year','')
        journal_page = self.request.POST.get('page','')
        journal_volume = self.request.POST.get('volume','0')
        journal_suppl = self.request.POST.get('suppl','No')
        context = citation_fetch(journal_name, journal_year, journal_page, journal_volume, journal_suppl)
        context['display_judgement'] = True
        self.template = loader.get_template('homelist.html')
        return HttpResponse(self.template.render(context, request))


def court_data(request):
    courts = CourtModel.objects.all().values('name')
    return JsonResponse({'courts': [data['name'] for data in courts]})


class CitationJudgementDisplayView(TemplateView):
    template_name = 'citation_judgement.html'
    model = CourtModel

    def get_context_data(self, **kwargs):
        context = super(CitationJudgementDisplayView, self).get_context_data(**kwargs)
        context['court_list'] = CourtModel.objects.all()
        courts = CourtModel.objects.all().values('name')
        context['court_data_list'] = [data['name'] for data in courts]
        context['citation_range'] = range(1950, 2018)
        context['citation_volume'] = range(0, 201)
        return context
