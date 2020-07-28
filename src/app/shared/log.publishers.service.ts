import { Injectable } from '@angular/core';
import { LogPublisher } from './log.publisher';
import { LocalStorage } from './loggers/log.localstorage';
import { LogConsole } from "./loggers/log.console";

@Injectable({ providedIn: 'root' })
export class LogPublishersService {
  constructor() { this.buildPublishers(); }

  publishers: LogPublisher[] = [];
  buildPublishers(): void {
    this.publishers.push(new LogConsole());
    this.publishers.push(new LocalStorage());
  }
}
