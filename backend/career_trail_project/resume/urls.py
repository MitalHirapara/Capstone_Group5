from django.urls import path
from .views import EnhanceWorkExperienceView

urlpatterns = [
    path('api/enhance-work-experience/', EnhanceWorkExperienceView.as_view(), name='enhance_work_experience'),
]
