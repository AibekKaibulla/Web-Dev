from xmlrpc.client import ResponseError

from django.http import Http404
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer

# /api/companies - List of all Companies (GET)
# /api/companies/<int:id>/ - Get one Company (GET)
# /api/companies/<int:id>/vacancies/ - List of Vacancies by Company_id (GET)
# /api/vacancies/ - List of all Vacancies (GET)
# /api/vacancies/<int:id>/ - Get one Vacancy (GET)
# /api/vacancies/top_ten/ - List of top 10 vacancies sorted by decreasing salary (GET)

class CompanyList(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyDetail(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_url_kwarg = 'company_id'

class CompanyVacanciesList(generics.ListAPIView):
    serializer_class = VacancySerializer
    lookup_url_kwarg = 'company_id'

    def get_queryset(self):
        company_id = self.kwargs.get(self.lookup_url_kwarg)
        try:
            Company.objects.get(company_id=company_id)
        except Company.DoesNotExist:
            raise Http404(f"Company with id: {company_id} does not exist")

        return Vacancy.objects.filter(company_id=company_id)

class VacancyList(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetail(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_url_kwarg = 'vacancy_id'

class VacancyTopTenList(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.order_by('-salary')[:10]