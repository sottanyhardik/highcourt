from django.db import models

# Create your models here.
from django.utils.text import slugify

from data.image_resize import resize_file

COURT_CHOICES = (
    ('T', 'Tribunal'),
    ('H', 'High'),
    ('S', 'Supreme')
)


class CourtModel(models.Model):
    name = models.CharField(max_length=255, unique=True)
    image = models.ImageField(upload_to='judgement', default='default.jpg')
    type = models.CharField(max_length=2, choices=COURT_CHOICES, default='H')
    slug = models.SlugField(unique=True, null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        resize_file(self.image.url)
        super(CourtModel, self).save(*args, **kwargs)

    def __str__(self):
        return "name {0}".format(self.name)


class PricingPackage(models.Model):
    name = models.CharField(max_length=255, unique=True)
    price = models.IntegerField()
    num_judgements = models.IntegerField()
    slug = models.SlugField(unique=True, null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super(PricingPackage, self).save(*args, **kwargs)

    def __str__(self):
        return "name {0} --> price {1}".format(self.name, self.price)
