import os
import json
from dotenv import load_dotenv
from django.http import JsonResponse
from django.views import View
from openai import OpenAI
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

# Load environment variables
load_dotenv()

# Initialize OpenAI client
client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

@method_decorator(csrf_exempt, name='dispatch')
class EnhanceWorkExperienceView(View):
    def post(self, request):
        try:
            data = json.loads(request.body)
            job_title = data.get("jobTitle")
            description = data.get("description")

            messages = [
                {"role": "user", "content": f"Enhance this job title: {job_title} and description: {description}"}
            ]

            chat_completion = client.chat.completions.create(
                messages=messages,
                model="gpt-3.5-turbo",
            )

            enhanced_content = chat_completion.choices[0].message.content.strip()
            return JsonResponse({"enhanced_experience": enhanced_content})

        except Exception as e:
            # Check if it's a quota error
            if 'insufficient_quota' in str(e):
                return JsonResponse({"error": "Your OpenAI API quota is exhausted. Please check your billing plan."}, status=403)
            return JsonResponse({"error": str(e)}, status=500)
