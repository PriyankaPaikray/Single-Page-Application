import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredProducts = [
    { name: 'Product 1', description: 'High-quality item.', image: 'assets/product1.jpg' },
    { name: 'Product 2', description: 'Best seller.', image: 'assets/product2.jpg' },
    { name: 'Product 3', description: 'Limited edition.', image: 'assets/product3.jpg' },
  ];
}
