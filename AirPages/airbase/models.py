from django.db import models

class User(models.Model):
    first_name = models.CharField("First name", max_length=240, blank=True, null=True)
    last_name = models.CharField("Last name", max_length=240, blank=True, null=True)
    email = models.EmailField()
    registrationDate = models.DateField("Registration Date", auto_now_add=True)
    address = models.CharField("Address", max_length=240)
    
    def __str__(self):
        return self.name


class Posting(models.Model):
    user = models.ForeignKey(User, models.CASCADE)
    image_link = models.URLField(blank=True, null=True)
    timestamp = models.DateField("Post Time", auto_now_add=True)
    facts = models.JSONField("facts", default=list, blank=True, null=True)