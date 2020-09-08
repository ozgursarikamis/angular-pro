import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResolverService {

constructor(private http: HttpClient) { }

getPosts() {
  console.log('resolver service');
  return this.http.get('https://jsonplaceholder.typicode.com/posts');
}

}
