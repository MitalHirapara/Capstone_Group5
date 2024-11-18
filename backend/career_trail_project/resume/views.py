from django.shortcuts import render
import openai
from rest_framework.decorators import api_view
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from weasyprint import HTML

# Configure the Gemini API with the API key
genai.configure(api_key=os.getenv("API_KEY"))

@api_view(['POST'])
def enhance_work_experience(request):
    try:
        # Parse the incoming data from the request
        data = request.data
        job_title = data.get("jobTitle")
        company = data.get("company")
        start_date = data.get("startDate")
        end_date = data.get("endDate")
        currently_working = data.get("currentlyWorking", False)
        description = data.get("description")

        # Ensure all required fields are present
        if not job_title or not company or not start_date or not description:
            return Response({"error": "Missing required fields"}, status=status.HTTP_400_BAD_REQUEST)

        return JsonResponse({"error": "No work experience provided."}, status=400)



@api_view(['POST'])
def generate_pdf(request):
    if request.method == 'POST':
        # Parse JSON data from the request
        data = json.loads(request.body)
        html_content = data.get("html", "")
        
        # Generate PDF
        pdf_file = HTML(string=html_content, base_url=request.build_absolute_uri()).write_pdf(stylesheets=["/path/to/your/tailwind.css"])

        # Send PDF as response
        response = HttpResponse(pdf_file, content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="resume.pdf"'
        return response
    return HttpResponse(status=400)

