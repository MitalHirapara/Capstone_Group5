# serializers.py
from rest_framework import serializers
from .models import Location, Certificate, Skill, Industry,Employer

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'  # or specify the fields you want to include

class CertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificate
        fields = ['id', 'certificate_name']

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'skill_name']

class IndustrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Industry
        fields = ['id', 'name']
class EmployerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employer
        fields = [
            "company_name",
            "company_description",
            "company_email",
            "company_logo",
            "company_banner",
            "industry_type",
            "company_size",
            "website_url",
            "location",
        ]
