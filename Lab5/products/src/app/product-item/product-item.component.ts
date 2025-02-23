import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();

  like() {
    this.product.likes++;
  }

  removeProduct() {
    this.remove.emit(this.product.id);
  }

  share(platform: string): void {
    const text = encodeURIComponent(`Check out this product: ${this.product.name}`);
    const url = encodeURIComponent(this.product.link);
    let shareUrl = '';

    if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${text}%20${url}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
    }

    window.open(shareUrl, '_blank');
  }

}
