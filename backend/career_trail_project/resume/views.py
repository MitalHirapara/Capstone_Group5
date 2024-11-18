from django.shortcuts import render
import openai
from rest_framework.decorators import api_view
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from weasyprint import HTML


openai.api_key = 'your_openai_api_key'

@csrf_exempt
def enhance_work_experience(request):
    if request.method == "POST":
        data = json.loads(request.body)
        work_experience = data.get('work_experience')

        if work_experience:
            # Send the request to ChatGPT API
            response = openai.Completion.create(
                engine="text-davinci-003",
                prompt=f"Improve and add more detail to this work experience section: {work_experience}",
                max_tokens=150,
                temperature=0.7
            )
            # Extract the content from GPT response
            generated_text = response.choices[0].text.strip()
            return JsonResponse({"enhanced_experience": generated_text})

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
