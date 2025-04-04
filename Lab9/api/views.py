from xmlrpc.client import ResponseError

from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer

# /api/companies - List of all Companies (GET)
# /api/companies/<int:id>/ - Get one Company (GET)
# /api/companies/<int:id>/vacancies/ - List of Vacancies by Company_id (GET)
# /api/vacancies/ - List of all Vacancies (GET)
# /api/vacancies/<int:id>/ - Get one Vacancy (GET)
# /api/vacancies/top_ten/ - List of top 10 vacancies sorted by decreasing salary (GET)

@api_view(['GET', 'POST'])
def company_list(request):
    # List of all Companies
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    # Insert a company
    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def company_detail(request, company_id=None):
    try:
        company = Company.objects.get(pk=company_id)
    except Company.DoesNotExist as e:
        return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)

    # Company based on id
    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def company_vacancies(request, company_id=None):
    try:
        Company.objects.get(pk=company_id)
    except Company.DoesNotExist as e:
        return Response({'error': f'Company with id = {company_id} not found.'}, status=status.HTTP_404_NOT_FOUND)

    vacancies = Vacancy.objects.filter(company_id=company_id)
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
def vacancy_list(request):
    # List of all vacancies
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    # Insert a vacancy
    elif request.method == 'POST':
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def vacancy_detail(request, vacancy_id=None):
    try:
        vacancy = Vacancy.objects.get(pk=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return Response({'error': f'Vacancy with id = {vacancy_id} not found.'}, status=status.HTTP_404_NOT_FOUND)

    serializer = VacancySerializer(vacancy)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def vacancy_top_ten(request):
    # List top 10 vacancies sorted by salary in DESC order
    top_vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(top_vacancies, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

