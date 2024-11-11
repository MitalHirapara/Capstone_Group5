from rest_framework import serializers
from .models import Job
from .models import Employer

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'

class EmployerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employer
        fields = ['company_name', 'company_description', 'company_email', 'industry_type', 
                  'company_size', 'website_url', 'location']

    def create(self, validated_data):
        # Use `user` from the view when creating a new Employer profile
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)
