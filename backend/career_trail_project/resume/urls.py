from django.urls import path
from .views import get_recommended_skills, enhance_work_experience

urlpatterns = [
    path('api/enhance-work-experience/', enhance_work_experience, name='enhance_work_experience'),
    path('api/recommended-skills/', get_recommended_skills, name='get_recommended_skills')
]
