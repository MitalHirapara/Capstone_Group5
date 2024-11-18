from django.db import models

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