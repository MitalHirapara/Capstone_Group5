from django.db import models
from django.contrib.auth.models import User
from django.db import models
from django.utils.crypto import get_random_string
from datetime import datetime, timedelta

# class EmailVerificationToken(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     token = models.CharField(max_length=100, unique=True)
#     created_at = models.DateTimeField(auto_now_add=True)

#     def is_token_expired(self):
#         return datetime.now() > self.created_at + timedelta(hours=24)

#     @staticmethod
#     def generate_token():
#         return get_random_string(50)


