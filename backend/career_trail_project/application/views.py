from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import JobApplication, Question, Answer, AnswerOption
from .serializers import JobApplicationSerializer, QuestionSerializer, AnswerSerializer
from career_trail.firebase_config import upload_to_firebase

@api_view(['POST'])
def create_job_application(request):
    try:
        resume = request.FILES.get('resume')
        cover_letter = request.FILES.get('cover_letter')

        # Upload files to Firebase
        resume_url = upload_to_firebase(resume, f"resumes/{resume.name}") if resume else None
        cover_letter_url = upload_to_firebase(cover_letter, f"cover_letters/{cover_letter.name}") if cover_letter else None

        # Save Job Application
        data = request.data.copy()
        data.update({'resume_url': resume_url, 'cover_letter_url': cover_letter_url})
        serializer = JobApplicationSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def get_questions_by_job(request, job_id):
    questions = Question.objects.filter(job_id=job_id)
    serializer = QuestionSerializer(questions, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def submit_answers(request):
    serializer = AnswerSerializer(data=request.data, many=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_job_applications(request, job_id):
    applications = JobApplication.objects.filter(job_id=job_id)
    serializer = JobApplicationSerializer(applications, many=True)
    return Response(serializer.data)
