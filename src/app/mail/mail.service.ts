import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Mail } from "./models/mail.interface";
import { Observable } from "rxjs";

const service = "http://localhost:3000/";
@Injectable()
export class MailService {
  constructor(private http: HttpClient) {}

  getFolder(folder: string): Observable<Mail[]> {
    return this.http.get<Mail[]>(`${service}messages?folder=${folder}`);
  }
}
