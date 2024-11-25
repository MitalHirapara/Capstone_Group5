from django.urls import path
from .views import create_job_application, get_questions_by_job, submit_answers, get_job_applications

urlpatterns = [
    path('apply/', create_job_application, name='create_job_application'),
    path('questions/<int:job_id>/', get_questions_by_job, name='get_questions_by_job'),
    path('answers/', submit_answers, name='submit_answers'),
    path('applications/<int:job_id>/', get_job_applications, name='get_job_applications'),
]
