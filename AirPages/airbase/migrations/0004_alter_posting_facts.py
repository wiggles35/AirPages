# Generated by Django 3.2 on 2021-04-15 02:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('airbase', '0003_auto_20210415_0203'),
    ]

    operations = [
        migrations.AlterField(
            model_name='posting',
            name='facts',
            field=models.JSONField(blank=True, default=list, null=True, verbose_name='facts'),
        ),
    ]
