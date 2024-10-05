from django.db import models
from django.contrib.auth.models import User  # Assuming you're using the default User model

class Employer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)  # Assuming a one-to-one relationship
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
    employer = models.ForeignKey(Employer, on_delete=models.CASCADE, related_name='jobs')
    title = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255, blank=True, null=True)
    job_type = models.CharField(max_length=50, blank=True, null=True)
    salary_range = models.CharField(max_length=50, blank=True, null=True)
    certificates = models.CharField(max_length=50, blank=True, null=True)
    skills = models.CharField(max_length=50, blank=True, null=True)
    posted_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title
