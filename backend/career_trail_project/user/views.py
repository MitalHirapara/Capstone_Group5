from datetime import datetime, timedelta
from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken


from .serializers import RegisterSerializer

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

'''class VerifyEmailView(generics.GenericAPIView):
    def get(self, request, token, *args, **kwargs):
        # Retrieve the token and check if it exists and is valid
        verification_token = get_object_or_404(EmailVerificationToken, token=token)
        if datetime.now() > verification_token.created_at + timedelta(hours=24):
            return Response({"error": "Token has expired"}, status=status.HTTP_400_BAD_REQUEST) 

        # Activate the user and delete the token
        user = verification_token.user
        user.is_active = True
        user.save()
        verification_token.delete()

        return Response({"message": "Email verified successfully"}, status=status.HTTP_200_OK)'''
