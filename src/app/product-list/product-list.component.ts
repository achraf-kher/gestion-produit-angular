import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product.model';
import { FilterPipe } from '../pipes/filter.pipe'; // Importer le pipe personnalisé

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe], // Importer FormsModule et FilterPipe
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [];
  searchTerm: string = '';

  newProduct: Product = {
    id: 0,
    name: '',
    price: 0,
    category: '',
    stock: 0,
  };
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  onSubmit(): void {
    // Générer un ID unique pour le nouveau produit
    const newId = this.products.length
      ? Math.max(...this.products.map((p) => p.id)) + 1
      : 1;
    this.newProduct.id = newId;

    // Ajouter le nouveau produit à la liste
    this.productService.addProduct(this.newProduct);

    // Réinitialiser le formulaire après l'ajout
    this.newProduct = { id: 0, name: '', price: 0, category: '', stock: 0 };
  }
}
