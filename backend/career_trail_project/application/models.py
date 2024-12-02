from django.db import models
from django.contrib.auth.models import User
from job.models import Job
from common.models import Employer

class JobApplication(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('reviewed', 'Reviewed'),
        ('shortlisted', 'Shortlisted'),
        ('rejected', 'Rejected'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    resume = models.FileField(upload_to='resumes/', blank=True, null=True)
    cover_letter = models.FileField(upload_to='cover_letters/', blank=True, null=True)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='pending')
    applied_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.job.title}"

class QuestionType(models.Model):
    type_name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.type_name

class Question(models.Model):
    employer = models.ForeignKey(Employer, on_delete=models.CASCADE)
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    question_text = models.TextField()
    question_type = models.ForeignKey(QuestionType, on_delete=models.CASCADE)

    def __str__(self):
        return self.question_text

class AnswerOption(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    option_text = models.TextField()

    def __str__(self):
        return self.option_text

class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    job_application = models.ForeignKey(JobApplication, on_delete=models.CASCADE)
    answer_text = models.TextField(blank=True, null=True)
    answer_option = models.ForeignKey(AnswerOption, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return f"{self.job_application} - {self.question}"
