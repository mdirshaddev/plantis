from django.urls import path, include
from .views import PlantViews

urlpatterns = [
    path('plants/', PlantViews.as_view()),
]
