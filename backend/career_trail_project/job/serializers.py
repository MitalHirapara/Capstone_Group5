from rest_framework import serializers
from .models import Job, Employer, Location  # Import Location model

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['id', 'city', 'state']  # Adjust based on the fields in the Location model

class JobSerializer(serializers.ModelSerializer):
    # Use LocationSerializer for nested representation of the `location` field
    location = LocationSerializer(read_only=True)
    location_id = serializers.PrimaryKeyRelatedField(
        source='location',  # Allows posting `location_id` directly
        queryset=Location.objects.all(),
        write_only=True
    )

    class Meta:
        model = Job
        fields = '__all__'  # Includes new fields like `experience_level`

class EmployerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employer
        fields = ['company_name', 'company_description', 'company_email', 'industry_type', 
                  'company_size', 'website_url', 'location']  # Update if new fields are added

    def create(self, validated_data):
        # Use `user` from the view when creating a new Employer profile
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)
