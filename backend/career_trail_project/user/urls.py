from django.urls import path
from .views import RegisterView, ForgotPasswordView

urlpatterns = [
    path('signup/', RegisterView.as_view(), name='signup'),
    path('forgot-password/', ForgotPasswordView.as_view(), name='forgot_password'),
]
