import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {
  }

  getPassengers(): Observable<User[]> {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
