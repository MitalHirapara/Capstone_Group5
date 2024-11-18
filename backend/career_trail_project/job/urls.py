from django.urls import path
from .views import get_jobs, create_job, job_detail

urlpatterns = [
    path('', get_jobs, name='get_jobs'),
    path('create/', create_job, name='create_job'),
    path('<int:id>/', job_detail, name='Job_detail'),
]
