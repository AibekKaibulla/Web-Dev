from django.urls import path

from api.views import (
    company_list,
    company_detail,
    vacancy_list,
    vacancy_detail,
    company_vacancies,
    vacancy_top_ten
)

# URL patterns relative to the '/api/' prefix defined in the project's urls.py

# /api/companies/ -> GET, POST
# /api/companies/<int:company_id>/ -> GET, PUT, DELETE
# /api/companies/<int:company_id>/vacancies/ -> GET
# /api/vacancies/ -> GET, POST
# /api/vacancies/<int:vacancy_id>/ -> GET, PUT, DELETE
# /api/vacancies/top_ten/ -> GE

urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:company_id>/', company_detail),
    path('companies/<int:company_id>/vacancies/', company_vacancies),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:vacancy_id>/', vacancy_detail),
    path('vacancies/top_ten/', vacancy_top_ten),
]
