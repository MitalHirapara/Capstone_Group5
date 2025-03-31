import os
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import google.generativeai as genai

# Configure the Gemini API with the API key
genai.configure(api_key=os.getenv("API_KEY"))

@api_view(['POST'])
def get_recommended_skills(request):
    try:
        # Parse the incoming data from the request
        data = request.data
        job_title = data.get("jobTitle")

        # Ensure the job title is provided
        if not job_title:
            return Response({"error": "Job title is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Construct the prompt for the Gemini API
        prompt = f"Provide a list of essential and recommended skills for the following job title: {job_title}. Format the response as a JSON array of skills."
        
        # Initialize the Gemini model and generate content
        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content(prompt)

        # Extract and format the generated content
        recommended_skills = response.text
        return Response({"skills": recommended_skills}, status=status.HTTP_200_OK)
    
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

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
        
        # Construct the prompt for the Gemini API
        prompt = f"Enhance the following job experience: Job title: {job_title}, Company: {company}, Start Date: {start_date}, End Date: {end_date if not currently_working else 'Present'}, Description: {description}, only provide me with enhanced description and the key achievements nothing else in simple text formatting with 8-10 lines."

        # Initialize the Gemini model and generate content
        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content(prompt)

        # Extract and return the generated content
        enhanced_content = response.text
        return Response({"enhanced_experience": enhanced_content}, status=status.HTTP_200_OK)
    
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
