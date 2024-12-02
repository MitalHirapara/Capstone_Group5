from django.http import JsonResponse
from .models import Location, Certificate, Skill, Industry
from .serializers import LocationSerializer, CertificateSerializer, SkillSerializer, IndustrySerializer

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