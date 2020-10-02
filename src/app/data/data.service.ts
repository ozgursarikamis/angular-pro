import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
	//   return of(userSettings);
	return this.http.post('https://5f51071d5e98480016123523[ERROR].mockapi.io/userSettings', userSettings);
  }

  getSubsTypes(): Observable<{ id: string, type: string }[]> {
	  const url = 'https://5f51071d5e98480016123523.mockapi.io/substypes';
	  return this.http.get<{ id: string, type: string }[]>(url);
  }
}
