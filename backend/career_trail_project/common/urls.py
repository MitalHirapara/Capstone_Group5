from django.urls import path
from . import views  # Importing the views module
from .views import EmployerProfileUpdateView

urlpatterns = [
    path('locations/', views.location_list, name='location-list'),
    path('certificates/', views.certificate_list, name='certificate-list'),
    path('skills/', views.skill_list, name='skill-list'),
    path('industries/', views.industry_list, name='industry_list'),
    path("employer-profile/", EmployerProfileUpdateView.as_view(), name="update-employer-profile"),
]