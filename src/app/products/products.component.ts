
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.generateProducts();
  }

  generateProducts() {
    const productData = [
      {
        name: 'Smartphone X',
        description: 'Latest model with advanced features',
        imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
      },
      {
        name: 'Laptop Pro',
        description: 'Powerful device for professionals',
        imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
      },
      {
        name: 'Wireless Earbuds',
        description: 'High-quality sound with long battery life',
        imageUrl: 'https://images.unsplash.com/photo-1563549054059-bf4ebe2f49d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
      },
      {
        name: 'Smart Watch',
        description: 'Track your fitness and stay connected',
        imageUrl: 'https://images.unsplash.com/photo-1698729616509-060e8f58e6c0?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
      },
      {
        name: 'Gaming Console',
        description: 'Next-gen experience for enthusiasts',
        imageUrl: 'https://images.unsplash.com/photo-1700155007323-1e4f4e58d627?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
      },
      {
        name: 'Wireless Speaker',
        description: 'Room-filling sound in a compact design',
        imageUrl: 'https://images.unsplash.com/photo-1591452706295-06d0d6abc3aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
      },
      {
        name: 'Tablet Ultra',
        description: 'Sleek and portable entertainment',
        imageUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
      },
      {
        name: 'Desktop PC',
        description: 'High-performance for demanding tasks',
        imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
      },
      {
        name: 'Camera Pro',
        description: 'Capture memories in stunning detail',
        imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
      },
      {
        name: 'Robot Vacuum',
        description: 'Effortless cleaning for your home',
        imageUrl: 'https://images.unsplash.com/photo-1647940990395-967898eb0d65?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
      }
    ];

    for (let i = 0; i < productData.length; i++) {
      const product: Product = {
        id: i + 1,
        name: productData[i].name,
        description: productData[i].description,
        price: Math.floor(Math.random() * 900) + 100,
        image: productData[i].imageUrl
      };
      this.products.push(product);
    }
  }
}
