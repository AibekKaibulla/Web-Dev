from django.urls import path
from .views import (
    CompanyList,
    CompanyDetail,
    CompanyVacanciesList,
    VacancyList,
    VacancyDetail,
    VacancyTopTenList
)

urlpatterns = [
    path('companies/', CompanyList.as_view(), name='company-list'),
    path('companies/<int:company_id>/', CompanyDetail.as_view(), name='company-detail'),
    path('companies/<int:company_id>/vacancies/', CompanyVacanciesList.as_view(), name='company-vacancies'),
    path('vacancies/', VacancyList.as_view(), name='vacancy-list'),
    path('vacancies/<int:vacancy_id>/', VacancyDetail.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', VacancyTopTenList.as_view(), name='vacancy-top-ten'),
]