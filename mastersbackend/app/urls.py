from app import views
from django.urls import path

urlpatterns = [
    path('',views.getRoutes,name="getRoutes"),
    path('products/',views.getProducts,name="getProducts"),
    path('products/<str:pk>',views.getProduct,name="getProduct"),
]