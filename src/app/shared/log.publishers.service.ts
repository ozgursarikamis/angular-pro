import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LogPublisher } from './log.publisher';
import { LocalStorage } from './loggers/log.localstorage';
import { LogConsole } from "./loggers/log.console";
import { LogPublisherConfig } from "./log.publishers.config";
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";

const PUBLISHER_CONFIG_FILE = 'assets/log-publishers.json';

@Injectable({ providedIn: 'root' })
export class LogPublishersService {
  constructor(private http: HttpClient) { this.buildPublishers(); }

  publishers: LogPublisher[] = [];
  buildPublishers(): void {
    // this.publishers.push(new LogConsole());
    // this.publishers.push(new LocalStorage());

    let logPublisher: LogPublisher;
    this.getLoggers().subscribe(response => {
      for (const logger of response.filter(x => x.isActive)) {
        switch (logger.loggerName.toLowerCase()) {
          case "console":
            logPublisher = new LogConsole();
            break;
          case "localStorage":
            logPublisher = new LocalStorage();
            break;
          case "webapi":
            logPublisher = new LogConsole(); // TODO: implement web api
            break;
        }
        logPublisher.location = logger.loggerLocation;
        this.publishers.push(logPublisher);
      }
    });
  }



  getLoggers(): Observable<LogPublisherConfig[]> {
    return this.http.get<LogPublisherConfig[]>(PUBLISHER_CONFIG_FILE)
      .pipe(
        // map(response => {
        //   return response;
        // }),
        catchError(this.handleErrors)
      );
  }
  handleErrors(error: any): Observable<any> {
    let errors: string[] = [];
    let message: string = "";

    message = `Status: ${error.status}`;
    message += ` - Status Text: ${error.statusText}`;
    if (error.json()) {
      message += ` - Exception Message: ${error.json().exceptionMessage}`;
    }
    errors.push(message);
    console.error("An error occured", errors);
    return throwError(error);
  }
}
