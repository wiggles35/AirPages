# Generated by Django 3.2 on 2021-04-13 04:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=240, verbose_name='Name')),
                ('email', models.EmailField(max_length=254)),
                ('registrationDate', models.DateField(auto_now_add=True, verbose_name='Registration Date')),
                ('address', models.CharField(max_length=240, verbose_name='Address')),
            ],
        ),
        migrations.CreateModel(
            name='Posting',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.FileField(upload_to='')),
                ('timestamp', models.DateField(auto_now_add=True, verbose_name='Post Time')),
                ('facts', models.JSONField(default=list, verbose_name='facts')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='airbase.user')),
            ],
        ),
    ]