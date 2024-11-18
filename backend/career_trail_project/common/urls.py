from django.urls import path
from . import views  # Importing the views module

urlpatterns = [
    path('locations/', views.location_list, name='location-list'),
    path('certificates/', views.certificate_list, name='certificate-list'),
    path('skills/', views.skill_list, name='skill-list'),
]