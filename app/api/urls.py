from django.urls import path, include
from .views import PlantViews
from rest_framework.authtoken import views

urlpatterns = [
    path('plants/', PlantViews.as_view()),
    path('api-key/', views.obtain_auth_token)
]
