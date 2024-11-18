from django.urls import path
from .views import get_jobs, create_job, job_detail,get_employer_profile,update_employer_profile

urlpatterns = [
    path('', get_jobs, name='get_jobs'),
    path('create/', create_job, name='create_job'),
    path('<int:id>/', job_detail, name='Job_detail'),
    path('employer/profile/', get_employer_profile, name='get_employer_profile'),
    path('employer/profile/update/',update_employer_profile, name='update_employer_profile'),
]
