# Generated by Django 2.2.3 on 2020-12-28 23:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tab_name', models.TextField(max_length=50)),
                ('text', models.TextField(max_length=300)),
            ],
        ),
    ]
