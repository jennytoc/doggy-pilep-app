# Generated by Django 4.0.4 on 2022-05-06 15:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('django_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='event',
            field=models.TextField(default=[]),
        ),
    ]