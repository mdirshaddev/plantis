from django.db import models
from django.contrib.auth.models import User
from PIL import Image
import uuid

class Plant(models.Model):
    id = models.UUIDField(unique=True, editable=False, primary_key=True, default=uuid.uuid4)
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    fullname = models.CharField(max_length=15, null=False, blank=False)
    plantname = models.CharField(max_length=255, null=False, blank=False)
    description = models.TextField()
    plantprice = models.FloatField(default=0)
    plantimage = models.ImageField(default='default.jpg', upload_to='plants')

    def __str__(self):
        return self.fullname
    
    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        super().save()

        img = Image.open(self.plantimage.path)
        if img.height > 400 or img.width > 400:
            output_size = (400, 400)
            img.thumbnail(output_size)
            img.save(self.plantimage.path)