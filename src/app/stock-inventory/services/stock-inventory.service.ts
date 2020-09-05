import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product, Item, Branch } from "../models/product";

const serviceUrl = 'https://5f51071d5e98480016123523.mockapi.io/';

@Injectable({
  providedIn: 'root'
})
export class StockInventoryService {
  constructor(private http: HttpClient) { }

  getCartItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${serviceUrl}cart`);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${serviceUrl}products`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${serviceUrl}products/${id}`);
  }

  checkBranchId(id: string): boolean {
    // let search = new URLSearchParams();
    // search.set('id', id);

    let name: string;
    let searchId: string;

    switch (id) {
      case "A123":
        searchId = "1";
        break;
      case "B456":
        searchId = "2";
        break;
      case "C789":
        searchId = "3";
        break;
      default:
        searchId = "A123";
        break;
    }

    this.http.get<Branch>(`${serviceUrl}branches/${searchId}`)
      .pipe(
        map(x => x.name),
        catchError(err => Observable.throw(err))
      ).subscribe(_name => name = _name);

    return !!name?.length;
  }
}
