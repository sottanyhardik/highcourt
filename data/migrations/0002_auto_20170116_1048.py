# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-16 10:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='courtmodel',
            name='slug',
            field=models.SlugField(blank=True, null=True, unique=True),
        ),
    ]