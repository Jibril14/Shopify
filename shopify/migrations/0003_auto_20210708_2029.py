# Generated by Django 3.1.7 on 2021-07-08 19:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shopify', '0002_auto_20210708_2006'),
    ]

    operations = [
        migrations.RenameField(
            model_name='shippingaddress',
            old_name='state',
            new_name='statee',
        ),
    ]
