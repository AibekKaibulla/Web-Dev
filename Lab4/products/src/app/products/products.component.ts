import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple Iphone 13',
      description: 'A feature-rich smartphone with excellent camera quality.',
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000', 
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium'
      ]
    },
    {
      id: 2,
      name: 'Logitech G102 Lightsync black',
      description: 'Make the most of your game time with G102 gaming mouse, featuring LIGHTSYNC technology, a gaming-grade sensor and a classic 6-button design.',
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000', 
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha5/h08/64119543070750.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h50/hea/64119545036830.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hea/h93/64119547428894.jpg?format=gallery-medium'
      ]
    },
    {
      id: 3,
      name: 'Apple iPad Air 2024',
      description: 'iPad Air features an 11- or all-new 13-inch Liquid Retina display, M2 chip, landscape front camera, and supports Apple Pencil Pro.',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h77/86745408634910.png?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-2024-wi-fi-11-11-djuim-8-gb-128-gb-seryi-119778165/?c=750000000', 
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc6/hee/86745408536606.png?format=gallery-medium'
      ]
    },{
      id: 4,
      name: 'Xiaomi Redmi 13C 8 gb/256',
      description: 'Xiaomi Redmi 13C Android smartphone. Announced Nov 2023. Features 6.74″ display, MT6769Z Helio G85 chipset, 5000 mAh battery, 256 GB storage, 8 GB RAM, ...',
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000', 
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/h2d/84526902837278.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6b/h15/84957845585950.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h94/heb/84957845651486.jpg?format=gallery-medium'
      ]
    },{
      id: 5,
      name: 'Samsung Galaxy S24 Ultra 5G',
      description: 'Samsung Galaxy S24 Ultra Android smartphone. Announced Jan 2024. Features 6.8″ display, Snapdragon 8 Gen 3 chipset, 5000 mAh battery, 1024 GB storage, ...',
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000', 
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdb/h7e/84963123494942.png?format=gallery-medium'
      ]
    },{
      id: 6,
      name: 'Apple iPhone 11',
      description: 'A feature-rich smartphone with excellent camera quality.',
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3c/h70/63944536522782.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-chernyi-100692387/?c=750000000', 
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf8/h9b/63944538947614.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h67/h71/63944540880926.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h45/haa/63944545239070.jpg?format=gallery-medium'
      ]
    },{
      id: 7,
      name: 'Snickers Super шоколадный батончик',
      description: 'A feature-rich smartphone with excellent camera quality.',
      rating: 3.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pac/p4e/11814886.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/snickers-super-shokoladnyi-batonchik-molochnyi-80-g-102153456/?c=750000000', 
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/p57/p4e/11814889.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/peb/p4b/11814890.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p97/p4b/11814893.jpg?format=gallery-medium'
      ]
    },{
      id: 8,
      name: 'Тостер SOKANY HJT-022 белый',
      description: 'Тостер кухонный Sokany HJT-022. Мощность 700W. Отличное решение для дома и офиса. Приготовьте себе отличный, вкусный, поджаристый сэндвич.',
      rating: 3.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h52/64354815344670.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/sokany-hjt-022-belyi-102372874/?c=750000000', 
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/h37/64354818424862.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/haf/h5c/64354820030494.jpg?format=gallery-medium'
      ]
    },{
      id: 9,
      name: 'Fifine AM8',
      description: 'Микрофон',
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc8/hf5/81108035239966.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/fifine-am8-110695025/?c=750000000', 
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/h69/81108035305502.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc9/h8d/86373975162910.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/haf/hac/86373975228446.jpg?format=gallery-medium'
      ]
    },{
      id: 10,
      name: 'Микроволновая печь AVA MMWO-2070B',
      description: 'microwave',
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h90/hd8/85539374170142.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/ava-mmwo-2070b-chernyi-117793364/?c=750000000', 
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h8f/h98/85539374235678.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h61/h0c/85539374301214.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h69/hd3/85539374366750.jpg?format=gallery-medium'
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void { }

  share(product: Product, platform: string): void {
    const text = encodeURIComponent(`Check out this product: ${product.name}`);
    const url = encodeURIComponent(product.link);
    let shareUrl = '';

    if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${text}%20${url}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
    }

    window.open(shareUrl, '_blank');
  }
}