from django.urls import path
from .views import RegisterView, ForgotPasswordView, ResetPasswordView

urlpatterns = [
    path('signup/', RegisterView.as_view(), name='signup'),
    path('forgot-password/', ForgotPasswordView.as_view(), name='forgot_password'),
    path('reset-password/<uidb64>/<token>/', ResetPasswordView.as_view(), name='reset_password'),
]
