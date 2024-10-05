# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Job
from .serializers import JobSerializer

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