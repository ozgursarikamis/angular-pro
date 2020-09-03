import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product, Item } from "../models/product";

const serviceUrl = 'https://5f51071d5e98480016123523.mockapi.io/';

@Injectable({
  providedIn: 'root'
})
export class StockInventoryService {
  constructor(private http: HttpClient) {}

  getCartItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${serviceUrl}cart`);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${serviceUrl}products`)
  }
}
