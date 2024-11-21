from django.db import models
from django.contrib.auth.models import User
from common.models import Location, Industry, Skill, Certificate, Employer

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

    employer = models.ForeignKey(Employer, on_delete=models.CASCADE, related_name='jobs')
    title = models.CharField(max_length=60)
    short_description = models.CharField(max_length=150, blank=True, null=True)
    description = models.TextField()
    location = models.ForeignKey(Location, on_delete=models.SET_NULL, null=True)
    job_type = models.CharField(max_length=50, choices=JOB_TYPES, default='Full-time')
    min_salary = models.PositiveIntegerField(null=True, blank=True)
    max_salary = models.PositiveIntegerField(null=True, blank=True)
    certificates = models.ManyToManyField(Certificate, blank=True)
    skill = models.ManyToManyField(Skill, blank=True)
    industry = models.ForeignKey(Industry, on_delete=models.SET_NULL, null=True)
    experience_level = models.CharField(max_length=50, choices=EXPERIENCE_LEVELS, default='Entry Level')
    posted_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    number_of_openings = models.PositiveIntegerField(default=1)

    def __str__(self):
        return self.title
