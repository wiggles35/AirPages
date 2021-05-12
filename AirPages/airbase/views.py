from django.shortcuts import render
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Posting, User
from .serializers import *


@api_view(['GET', 'POST'])
def posting_list(request):
    ''' This is the endpoint for getting all postings or creating a new posting '''
    if request.method == 'GET':
        data = Posting.objects.all().order_by('-id')[:25]

        serializer = PostingSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = PostingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def user_list(request):
    ''' This is the endpoint for getting or manipulating all users at once '''
    if request.method == 'GET':
        data = User.objects.all().order_by('-id')[:25]

        serializer = UserSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            saved_data = serializer.save()
            response_data = {"user_id": saved_data.id}
            return JsonResponse(response_data, status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def user_posting_detail(request, pk):
    ''' This is the endpoint for getting or manipulating all postings for a specific user '''
    if request.method == 'GET':
        data = Posting.objects.filter(user=pk) # This could be a query bottleneck?

        serializer = PostingSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

   


@api_view(['GET', 'PUT', 'DELETE'])
def user_detail(request, pk):
    ''' This is the endpoint for getting a specific user '''
    if pk.isnumeric():
        try:
            user = User.objects.get(pk=pk)
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    else:
        try:
            if request.method != 'GET':
                return Response(status=status.HTTP_400_BAD_REQUEST)
            user = User.objects.filter(username__contains=pk)
            serializer = UserSerializer(user, context={'request': request}, many=True)
            return Response(serializer.data)
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = UserSerializer(user, context={'request': request})
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def posting_detail(request, pk):
    ''' This is the endpoint for getting a specific posting '''
    try:
        posting = Posting.objects.get(pk=pk)
    except Posting.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PostingSerializer(posting, context={'request': request})
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = PostingSerializer(posting, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        posting.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def login(request):
    ''' This is how you login '''
    try:
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = User.objects.get(username=serializer.validated_data['username'], password=serializer.validated_data['password'])
            json_data = {"user_id": user.id}
            return JsonResponse(json_data, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
