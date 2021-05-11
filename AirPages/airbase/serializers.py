from rest_framework import serializers
from .models import User, Posting

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__' # probably need to update to keep original timestamp


class PostingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Posting
        fields = '__all__'

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)
    