from django.urls import path
from .views import get_jobs, create_job, get_job, job_detail,get_employer_profile,update_employer_profile,home,get_industries

urlpatterns = [
    path('', home, name='home'),
    path('jobs/', get_jobs, name='get_jobs'),
    path('job/create/', create_job, name='create_job'),
    path('job/<int:id>/', job_detail, name='Job_detail'),
    path('job/detail/<int:id>/', get_job, name='get_job'),
    path('job/update/<int:id>/', job_detail, name='job_update'),
    path('employer/profile/', get_employer_profile, name='get_employer_profile'),
    path('job/industries/', get_industries, name='get_industries'),
    path('employer/profile/update/',update_employer_profile, name='update_employer_profile'),

]
