from django.urls import path
from .views import generate_pdf

urlpatterns = [
    path('resume/generate-pdf', generate_pdf, name='generate_pdf'),
]
