from django.http import JsonResponse
from .models import Location, Certificate, Skill
from .serializers import LocationSerializer, CertificateSerializer, SkillSerializer

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