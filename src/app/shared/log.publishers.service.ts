import { Injectable } from '@angular/core';
import { LogPublisher, LogConsole } from './log.publisher';

@Injectable({ providedIn: 'root' })
export class LogPublishersService {
  constructor() { this.buildPublishers(); }

  publisher: LogPublisher[] = [];
  buildPublishers(): void {
    this.publisher.push(new LogConsole());
  }
}
