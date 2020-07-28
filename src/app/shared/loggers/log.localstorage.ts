import { LogPublisher } from '../log.publisher'
import { LogEntry } from '../log.entry';
import { Observable, of } from 'rxjs';

export class LocalStorage extends LogPublisher {
  constructor() {
    super();
    this.location = "logging";
  }
  log(record: LogEntry): Observable<boolean> {
    let ret: boolean = false;
    let values: LogEntry[];
    try {
      values = JSON.parse(localStorage.getItem(this.location)) || [];
      values.push(record);
      localStorage.setItem(this.location, JSON.stringify(values));
    } catch (error) {
      console.error(error);
    }
    return of(ret);
  }
  clear(): Observable<boolean> {
    localStorage.removeItem(this.location);
    return of(true);
  }

}
