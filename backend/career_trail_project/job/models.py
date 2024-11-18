from django.db import models
from django.contrib.auth.models import User
from common.models import Location  # Import global Location model

class Employer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    company_name = models.CharField(max_length=255)
    company_description = models.TextField(blank=True, null=True)
    company_email = models.EmailField(max_length=255)
    company_logo = models.BinaryField(blank=True, null=True)
    company_banner = models.BinaryField(blank=True, null=True)
    industry_type = models.CharField(max_length=255, blank=True, null=True)
    company_size = models.IntegerField(blank=True, null=True)
    website_url = models.URLField(max_length=255, blank=True, null=True)
    location = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.company_name


class Job(models.Model):
    # Choices for job type and experience level
    JOB_TYPES = [
        ('Full-time', 'Full-time'),
        ('Part-time', 'Part-time'),
        ('Contract', 'Contract'),
        ('Permanent', 'Permanent'),
    ]

    EXPERIENCE_LEVELS = [
        ('Entry Level', 'Entry Level'),
        ('Mid-Senior Level', 'Mid-Senior Level'),
        ('Senior Level', 'Senior Level'),
    ]

    # Fields for the Job model
    employer = models.ForeignKey(Employer, on_delete=models.CASCADE, related_name='jobs')
    title = models.CharField(max_length=60)  # Updated character limit
    description = models.TextField()  # 300-500 words; frontend validation will handle it
    location = models.ForeignKey(Location, on_delete=models.SET_NULL, null=True)  # Dropdown
    job_type = models.CharField(max_length=50, choices=JOB_TYPES, default='Full-time')  # Dropdown with default value
    salary_range = models.CharField(max_length=50, blank=True, null=True)
    certificates = models.CharField(max_length=50, blank=True, null=True)
    skills = models.CharField(max_length=50, blank=True, null=True)
    experience_level = models.CharField(max_length=50, choices=EXPERIENCE_LEVELS, default='Entry Level')  # Dropdown
    posted_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    number_of_openings = models.PositiveIntegerField(default=1)

    def __str__(self):
        return self.title
