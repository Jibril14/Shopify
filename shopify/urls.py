from django.urls import path
from  .import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('users/login/',  views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),

   
    path('products/', views.allProducts, name='products'),
    path('products/<int:pk>/', views.eachProduct, name='product'),
    path('products/delete/<int:pk>/', views.deleteProduct, name='product-delete'),
    path('products/create/', views.createProduct, name='create'),
    path('products/<int:pk>/reviews/', views.createProductReview, name='review'),
    path('products/top/', views.getTopProducts, name='top'),
    path('products/category/', views.ProductCategoryView.as_view()),
  

    path('products/upload/', views.uploadImage, name='image-upload'),
    

    path( 'users/registration/', views.UserRegisteration, name='register'),
    path('users/profile/', views.UserProfile, name='userprofile'),
    path('users/profile/update/', views.UpdateUserProfile, name='updateUserProfile'),
    path('users/', views.siteUsers, name="siteusers"),
    path('users/delete/<int:pk>/', views.deleteUser, name='user-delete'),

    path('users/<int:pk>/', views.getUserById, name='user-id'),
    path('users/update/<int:pk>/', views.updateUser, name='user-update'),

    path('orders/', views.getOrders, name='orders'),
    path('orders/add/', views.addOrderItems, name='orders-add'),
    path('orders/myorders/', views.getMyOrders, name='myorders'),
    path('orders/<int:pk>/', views.getOrderById, name='user-order'),
    path('orders/<int:pk>/pay/', views.updateOrderToPaid, name='pay'),
    path('orders/<int:pk>/deliver/', views.updateOrderToDelivered, name='delivered'),
    
    path('create/message/', views.createMessage.as_view(), name="message-create"),




  



]