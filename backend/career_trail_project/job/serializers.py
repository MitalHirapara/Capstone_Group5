from rest_framework import serializers
from .models import Job, Employer
from common.models import Location, Skill, Certificate, Industry

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['id', 'city', 'state']

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'skill_name']

class CertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificate
        fields = ['id', 'certificate_name']

class IndustrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Industry
        fields = ['id', 'name']

class JobSerializer(serializers.ModelSerializer):
    # Nested serializers
    location = LocationSerializer(read_only=True)
    location_id = serializers.PrimaryKeyRelatedField(
        source='location', queryset=Location.objects.all(), write_only=True
    )
    skills = SkillSerializer(many=True, read_only=True)
    skill_ids = serializers.PrimaryKeyRelatedField(
        source='skills', many=True, queryset=Skill.objects.all(), write_only=True
    )
    certificates = CertificateSerializer(many=True, read_only=True)
    certificate_ids = serializers.PrimaryKeyRelatedField(
        source='certificates', many=True, queryset=Certificate.objects.all(), write_only=True
    )
    industry = IndustrySerializer(read_only=True)
    industry_id = serializers.PrimaryKeyRelatedField(
        source='industry', queryset=Industry.objects.all(), write_only=True
    )

    class Meta:
        model = Job
        fields = '__all__'

class EmployerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employer
        fields = ['company_name', 'company_description', 'company_email', 'industry_type', 
                  'company_size', 'website_url', 'location']
