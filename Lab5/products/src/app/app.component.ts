import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from './product.model';

export interface Category {
  id: number;
  name: string;
  products: Product[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  categories: Category[] = [
    {id: 1, name: 'Electronics', products: this.createProducts('Electronics')},
    { id: 2, name: 'Books', products: this.createProducts('Books') },
    { id: 3, name: 'Clothing', products: this.createProducts('Clothing') },
    { id: 4, name: 'Home & Kitchen', products: this.createProducts('Home & Kitchen') },
  ];

  selectedCategory?: Category;

  createProducts(categoryName: string): Product[] {
    const products: Product[] = [];
    for (let i = 1; i <= 5; i++) {
      products.push({
        id: i,
        name: `${categoryName} Product ${i}`,
        description: `This is a description for ${categoryName} product.`,
        rating: + (Math.random() * 2 + 4).toFixed(1),
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium'
        ],
        likes: 0
      });
    }
    return products;
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  removeProduct(productId: number) {
    if (this.selectedCategory) {
      this.selectedCategory.products = this.selectedCategory.products.filter(p => p.id !== productId);
    }
  }
}
