import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product.model';

@Pipe({
  name: 'filter',
  standalone: true, // Le pipe est autonome
})
export class FilterPipe implements PipeTransform {
  transform(products: Product[], searchTerm: string): Product[] {
    if (!products || !searchTerm) {
      return products;
    }
    // Filtrer les produits en fonction du nom
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
