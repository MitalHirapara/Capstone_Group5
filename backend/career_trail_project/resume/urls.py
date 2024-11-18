from django.urls import path
from .views import generate_pdf, enhance_work_experience

urlpatterns = [
    path('resume/generate-pdf', generate_pdf, name='generate_pdf'),
    path('api/enhance-work-experience/', enhance_work_experience, name='enhance_work_experience')
]
