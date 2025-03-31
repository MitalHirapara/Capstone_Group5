from django.http import JsonResponse
from .models import Location, Certificate, Skill, Industry
from .serializers import LocationSerializer, CertificateSerializer, SkillSerializer, IndustrySerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from common.models import Employer
from common.serializers import EmployerSerializer

def location_list(request):
    locations = Location.objects.all()
    serializer = LocationSerializer(locations, many=True)
    return JsonResponse(serializer.data, safe=False)

def certificate_list(request):
    certificates = Certificate.objects.all()
    serializer = CertificateSerializer(certificates, many=True)
    return JsonResponse(serializer.data, safe=False)

def skill_list(request):
    skills = Skill.objects.all()
    serializer = SkillSerializer(skills, many=True)
    return JsonResponse(serializer.data, safe=False)

# Industry list view
def industry_list(request):
    industries = Industry.objects.all()
    serializer = IndustrySerializer(industries, many=True)
    return JsonResponse(serializer.data, safe=False)

#Employer Profile View        
class EmployerProfileUpdateView(APIView):
    def get(self, request, *args, **kwargs):
        """
        Retrieve the employer's profile based on the authenticated user.
        """
        user = request.user
        try:
            employer = Employer.objects.get(user=user)
            serializer = EmployerSerializer(employer)
            return Response({"message": "Profile retrieved successfully", "data": serializer.data}, status=status.HTTP_200_OK)
        except Employer.DoesNotExist:
            return Response({"message": "Employer profile does not exist."}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, *args, **kwargs):
        """
        Update the employer's profile.
        """
        user = request.user
        try:
            employer = Employer.objects.get(user=user)
            serializer = EmployerSerializer(employer, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "Profile updated successfully", "data": serializer.data}, status=status.HTTP_200_OK)
            return Response({"message": "Error", "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Employer.DoesNotExist:
            return Response({"message": "Employer profile does not exist."}, status=status.HTTP_404_NOT_FOUND)

