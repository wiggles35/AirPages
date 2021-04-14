from django.db import models

class User(models.Model):
    name = models.CharField("Name", max_length=240)
    email = models.EmailField()
    registrationDate = models.DateField("Registration Date", auto_now_add=True)
    address = models.CharField("Address", max_length=240)
    
    def __str__(self):
        return self.name


class Posting(models.Model):
    user = models.ForeignKey(User, models.CASCADE)
    image = models.FileField()
    timestamp = models.DateField("Post Time", auto_now_add=True)
    facts = models.JSONField("facts", default=list)