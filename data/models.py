from django.db import models

# Create your models here.
from django.utils.text import slugify

from data.image_resize import resize_file


class CourtModel(models.Model):
    name = models.CharField(max_length=255, unique=True)
    image = models.ImageField(upload_to='')
    slug = models.SlugField(unique=True, null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        resize_file(self.image.url)
        super(CourtModel, self).save(*args, **kwargs)


class PricingPackage(models.Model):
    name = models.CharField(max_length=255, unique=True)
    price = models.IntegerField()
    num_judgements = models.IntegerField()
    slug = models.SlugField(unique=True, null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super(PricingPackage, self).save(*args, **kwargs)