from django.urls import path
from .views import enhance_work_experience

urlpatterns = [
    path('api/enhance-work-experience/', enhance_work_experience, name='enhance_work_experience'),
]
