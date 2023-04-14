import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading = true; // Not is necessary set the type in boolean
  products: Product[] = [];
  productsFiltered: Product[] = [];

  constructor(private http: HttpClient) {
    console.log('ProductsService - LOADED');
    this.loadProducts();
  }

  private loadProducts() {
    return new Promise((resolve, rejected) => {
      this.http.get('https://angular-from-html-to-webapp-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json').subscribe((resp: any) => {
        this.products = resp;
        this.loading = false;
        resolve(true);
      });
    });
  }

  public getProduct(id: string) {
    return this.http.get(`https://angular-from-html-to-webapp-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`);
  }

  public searchItem(value: string) {
    if (this.products.length === 0) {
      // wait for loadProducts
      this.loadProducts().then(() => {
        // when loadProdcuts si resolve
        this.filtering(value);
      });
    } else {
      // filtering
      this.filtering(value);
    }
  }

  private filtering(value: string) {
    value = value.toLowerCase();
    console.log(`ProductService - filtering - value[${value}]`);    
    this.productsFiltered = this.products.filter(item => {
      const categoriaLower = item.categoria.toLowerCase();
      const tituloLower = item.titulo.toLowerCase();
      return categoriaLower.includes(value) || tituloLower.includes(value);
    });
  }
}
