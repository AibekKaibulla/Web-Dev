from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

# Create your views here.
class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    """
    A viewset for viewing products.
    - /api/products/ : List all products
    - /api/products/<int:pk>: Get a specific product by id
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """
    A viewset for viewing categories and products by category.
    - /api/categories/: List all categories
    - /api/categories/<int:pk>: Get a specific category by id
    - /api/categories/<int:pk>/products: List all products in a specific category
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        """
        Custom action to get all products in a specific category.
        """
        category = self.get_object()
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)