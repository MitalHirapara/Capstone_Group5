from datetime import datetime, timedelta
from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken


from .serializers import RegisterSerializer
from .serializers import UserSerializer
from django.core.mail import send_mail
from django.conf import settings
from rest_framework.views import APIView 

from django.contrib.auth import get_user_model, authenticate
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.core.mail import EmailMessage
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated

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
    
class UserListView(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    
User = get_user_model()

# Registration View
class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        data = request.data
        try:
            user = User.objects.create_user(
                username=data['username'],
                email=data['email'],
                password=data['password'],
                is_active=False
            )
            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            activation_link = f"{settings.FRONTEND_URL}/activate/{uid}/{token}"

            email = EmailMessage(
                subject="Activate Your Account",
                body=f"Click the link to activate your account: {activation_link} \n\n Thank you for registering!!",
                to=[data['email']]
            )
            email.send()

            return Response({"message": "Registration successful! Check your email for the activation link."}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


class ActivateView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, uid, token):
        try:
            # Decode the UID and fetch the user
            uid = force_str(urlsafe_base64_decode(uid))
            user = User.objects.get(pk=uid)

            # Check if the token is valid
            if default_token_generator.check_token(user, token):
                if user.is_active:
                    return Response({"message": "Account is already activated."}, status=status.HTTP_200_OK)
                
                # Activate the user account
                user.is_active = True
                user.save()
                redirect_url = f"{settings.FRONTEND_URL}/login"
                return Response({"message": "Account activated successfully!",  "redirect_url": redirect_url}, status=status.HTTP_200_OK)
            
            # Token is invalid
            return Response({"error": "Invalid or expired activation token."}, status=status.HTTP_400_BAD_REQUEST,)
        except (User.DoesNotExist, ValueError, TypeError):
            # Handle errors in decoding or fetching user
            return Response({"error": "Invalid activation link or user not found."}, status=status.HTTP_400_BAD_REQUEST)
        
# Login View
from rest_framework_simplejwt.tokens import RefreshToken

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        data = request.data
        user = authenticate(username=data['username'], password=data['password'])
        if user and user.is_active:
            refresh = RefreshToken.for_user(user)
            if user.is_staff:
                redirect_url = "/dashboard"  # Redirect staff users to the dashboard
            else:
                redirect_url = "/jobs"
            return Response({
                "access": str(refresh.access_token),
                "refresh": str(refresh),
                "redirect_url": redirect_url 
            })
        return Response({"error": "Invalid credentials or inactive account."}, status=status.HTTP_401_UNAUTHORIZED)
    
class EmployerRegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        data = request.data
        try:
            # Create the user as an employer
            user = User.objects.create_user(
                username=data['username'],
                email=data['email'],
                password=data['password'],
                is_active=False,  # Account is inactive until they activate it
                is_staff=True  # This is an employer
            )
            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            activation_link = f"{settings.FRONTEND_URL}/activate/{uid}/{token}"

            # Send the activation email
            email = EmailMessage(
                subject="Activate Your Employer Account",
                body=f"Click the link to activate your employer account: {activation_link}",
                to=[data['email']]
            )
            email.send()

            return Response({"message": "Employer registration successful! Check your email for the activation link."}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

