# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Job
from .serializers import JobSerializer
from .models import Employer
from common.models import Location
from .serializers import EmployerSerializer
from .serializers import LocationSerializer

@api_view(['GET'])
def get_locations(request):
    locations = Location.objects.all()
    serializer = LocationSerializer(locations, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_jobs(request):
    jobs = Job.objects.all()
    serializedData = JobSerializer(jobs, many=True).data
    return Response(serializedData)


@api_view(['POST'])
def create_job(request):
    data = request.data
    serializer = JobSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status= status.HTTP_201_CREATED)
    return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def job_detail(request, id):
    try:
        job = Job.objects.get(id=id)
    except Job.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        job.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        data = request.data
        serializer = JobSerializer(job, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_employer_profile(request):
    try:
        # Try to fetch the existing employer profile for the user
        employer = Employer.objects.get(user=request.user)
        serializer = EmployerSerializer(employer)
        return Response(serializer.data)
    except Employer.DoesNotExist:
        # If profile does not exist, return an empty profile structure
        empty_profile = {
            "company_name": "",
            "company_description": "",
            "company_email": "",
            "industry_type": "",
            "company_size": None,
            "website_url": "",
            "location": ""
        }
        return Response(empty_profile, status=status.HTTP_200_OK)


@api_view(['PUT'])
def update_employer_profile(request):
    try:
        # Try to update the existing employer profile
        employer = Employer.objects.get(user=request.user)
        serializer = EmployerSerializer(employer, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Employer.DoesNotExist:
        # If the profile does not exist, create a new one
        serializer = EmployerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)  # Associate the profile with the user
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)