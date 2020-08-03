from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.authentication import TokenAuthentication, SessionAuthentication, BaseAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from .serializers import PlantSerializer
from ..models import Plant

class PlantViews(APIView):
    serializer_class = PlantSerializer
    def get(self, request):
        data = Plant.objects.all()
        print(data)
        data_serialized=PlantSerializer(data, many=True).data
        return Response(data=data_serialized, status=status.HTTP_200_OK)
    
    def post(self, request):
        data = request.data
        print(data)
        try:
            serializer = PlantSerializer(data=data)
            if serializer.is_valid():
                plant_data = serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response(e, status=status.HTTP_400_BAD_REQUEST)    
        