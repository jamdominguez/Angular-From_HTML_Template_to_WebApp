import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [];
  loading = true; // Not is necessary set the type in boolean

  constructor(private http: HttpClient) {
    console.log('ProductsService - LOADED');
    this.loadProducts();
  }

  private loadProducts() {
    this.http.get('https://angular-from-html-to-webapp-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json').subscribe((resp: any) => {
      this.products = resp;
      this.loading = false;
    });
  }

  public getProduct(id: String) {
    return this.http.get(`https://angular-from-html-to-webapp-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`);
  }
}
