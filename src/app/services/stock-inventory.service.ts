import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Cart, Product } from '../models/product';

const url = 'https://5f51071d5e98480016123523.mockapi.io';

@Injectable({
  providedIn: 'root'
})
export class StockInventoryService {
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${url}/products`);
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${url}/products/${id}`);
  }

  getCartItems(): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${url}/cart`);
  }
}

