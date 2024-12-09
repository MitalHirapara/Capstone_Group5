from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Job, Employer
from common.models import Location, Skill, Certificate, Industry
from .serializers import JobSerializer, EmployerSerializer, LocationSerializer, IndustrySerializer
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the Job Portal!")

@api_view(['GET'])
def get_industries(request):
    industries = Industry.objects.all()
    serializer = IndustrySerializer(industries, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_locations(request):
    locations = Location.objects.all()
    serializer = LocationSerializer(locations, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_jobs(request):
    jobs = Job.objects.all()
    serializer = JobSerializer(jobs, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_job(request):
    serializer = JobSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_job(request, id):
    """
    Retrieve details of a single job by its ID.
    """
    try:
        job = Job.objects.get(id=id)
        serializer = JobSerializer(job)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Job.DoesNotExist:
        return Response({'error': 'Job not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['PUT', 'DELETE'])
def job_detail(request, id):
    try:
        job = Job.objects.get(id=id)
    except Job.DoesNotExist:
        return Response({'error': 'Job not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        job.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':
        serializer = JobSerializer(job, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_employer_profile(request):
    try:
        employer = Employer.objects.get(user=request.user)
        serializer = EmployerSerializer(employer)
        return Response(serializer.data)
    except Employer.DoesNotExist:
        return Response({'error': 'Employer profile not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['PUT'])
def update_employer_profile(request):
    try:
        employer = Employer.objects.get(user=request.user)
        serializer = EmployerSerializer(employer, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Employer.DoesNotExist:
        serializer = EmployerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
