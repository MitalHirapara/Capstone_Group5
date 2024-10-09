from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegisterSerializer
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.core.mail import send_mail
from django.conf import settings
from rest_framework.views import APIView 

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        
        refresh = RefreshToken.for_user(user)
        return Response({
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        })

class ForgotPasswordView(generics.GenericAPIView):
    def post(self, request):
        email = request.data.get('email')
        # Logic to handle password reset email sending
        return Response({"message": "Password reset email sent."})

class ForgotPasswordView(APIView):
    def post(self, request):
        email = request.data.get('email')
        if not email:
            return Response({"error": "Email is required."}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user = User.objects.get(email=email)
            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            reset_link = f"{request.build_absolute_uri('/user/reset-password/')}{uid}/{token}/"
            
            # Compose the email
            subject = 'Password Reset Request'
            message = f'''
            Hi {user.username},

            You requested a password reset. Please click the link below to reset your password:

            {reset_link}

            If you did not request this, please ignore this email.

            Thank you!
            '''
            # Send email
            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                [email],
                fail_silently=False,
            )
            return Response({"message": "Password reset email sent."}, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({"error": "No user associated with this account. Please sign up."}, status=status.HTTP_404_NOT_FOUND)

    def get(self, request):
        return Response({"error": "GET method not allowed."}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

class ResetPasswordView(APIView):
    def post(self, request, uidb64, token):
        # Logic to reset the user's password goes here
        return Response({"message": "Password has been reset."}, status=status.HTTP_200_OK)
