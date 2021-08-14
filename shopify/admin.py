from django.contrib import admin
from shopify.models import Product, Review, Order, OrderedItem, ShippingAddress, Message
# Register your models here.

admin.site.register(Product)
admin.site.register(Review)
admin.site.register( Order)
admin.site.register(OrderedItem)
admin.site.register(ShippingAddress)

admin.site.register(Message)