from django.shortcuts import render
from django.http import HttpResponse

def say_hello(request):
    return HttpResponse("Bernz/Shell Boat Parts")