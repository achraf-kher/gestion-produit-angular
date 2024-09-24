import { Injectable } from '@angular/core';
import { Product } from '../models/Product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public products: Product[] = [
    { id: 1, name: 'Laptop', price: 1200, category: 'Electronics', stock: 0 },
    {
      id: 2,
      name: 'Smartphone',
      price: 800,
      category: 'Electronics',
      stock: 15,
    },
    { id: 3, name: 'Table', price: 150, category: 'Furniture', stock: 5 },
    { id: 4, name: 'Chair', price: 85, category: 'Furniture', stock: 20 },
  ];

  constructor() {}

  // Méthode pour obtenir la liste des produits
  getProducts(): Product[] {
    return this.products;
  }

  // Méthode pour ajouter un produit
  addProduct(product: Product) {
    this.products.push(product);
  }
}
