from django.urls import path
from .views import RegisterView, ForgotPasswordView, ResetPasswordView,UserListView,ActivateView,LoginView,EmployerRegisterView

urlpatterns = [
    path('forgot-password/', ForgotPasswordView.as_view(), name='forgot_password'),
    path('reset-password/<uidb64>/<token>/', ResetPasswordView.as_view(), name='reset_password'),
    path('admin/', UserListView.as_view(), name='user-list'),
    path('register/', RegisterView.as_view(), name='register'),
     path('register/employer/', EmployerRegisterView.as_view(), name='employer-register'),
    path('activate/<str:uid>/<str:token>/', ActivateView.as_view(), name='activate'),
    path('login/', LoginView.as_view(), name='login'),
]
