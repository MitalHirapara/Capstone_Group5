from django.db import models
from django.contrib.auth.models import User

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

class Location(models.Model):
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.city}, {self.state}"

class Certificate(models.Model):
    certificate_name = models.CharField(max_length=255)

    def __str__(self):
        return self.certificate_name

class Skill(models.Model):
    skill_name = models.CharField(max_length=255)

    def __str__(self):
        return self.skill_name
    
class Industry(models.Model):
    name = models.CharField(max_length=255)  # Industry name

    def __str__(self):
        return self.name
