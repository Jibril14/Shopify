from django.apps import AppConfig


class ShopifyConfig(AppConfig):
    name = 'shopify'

    def ready(self):
        import shopify.signals
