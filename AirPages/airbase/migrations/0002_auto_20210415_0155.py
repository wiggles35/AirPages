# Generated by Django 3.2 on 2021-04-15 01:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('airbase', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='name',
        ),
        migrations.AddField(
            model_name='user',
            name='first_name',
            field=models.CharField(blank=True, max_length=240, null=True, verbose_name='First name'),
        ),
        migrations.AddField(
            model_name='user',
            name='last_name',
            field=models.CharField(blank=True, max_length=240, null=True, verbose_name='Last name'),
        ),
    ]
