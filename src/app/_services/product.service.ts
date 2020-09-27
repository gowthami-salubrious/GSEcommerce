import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiEndPoint } from 'src/environments/environment';
import { ProductStructure } from '../_model/product.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductStructure[] = [];
  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductStructure[]> {
    if (this.products.length > 0) {
      return of(this.products);
    } else {
      return this.fetchProducts().pipe(map(response => {
        return this.products = response;
      }));
    }
  }

  fetchProducts(): Observable<ProductStructure[]> {
    return this.http.get(ApiEndPoint + 'assets/products.json') as Observable<ProductStructure[]> ;
  }
} 
