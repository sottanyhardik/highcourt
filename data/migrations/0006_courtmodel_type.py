# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-06-04 16:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0005_auto_20170604_1643'),
    ]

    operations = [
        migrations.AddField(
            model_name='courtmodel',
            name='type',
            field=models.CharField(choices=[('T', 'Tribunal'), ('H', 'High'), ('S', 'Supreme')], default='H', max_length=2),
        ),
    ]
