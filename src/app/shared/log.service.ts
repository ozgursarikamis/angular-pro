import { Injectable } from '@angular/core';
import { LogLevel } from "./log.level";
import { LogEntry } from "./log.entry";
import { LogPublisher } from './log.publisher';
import { LogPublishersService } from './log.publishers.service';

@Injectable({ providedIn: 'root'})
export class LogService {
  level: LogLevel = LogLevel.All;
  logWithDate = true;

  publishers: LogPublisher[];

  constructor(private publisherService: LogPublishersService) {
    this.publishers = this.publisherService.publisher;
   }

  private shouldLog(level: LogLevel): boolean {
    // this.level = LogLevel.Off;
    return this.level !== LogLevel.Off && level >= this.level;
  }

  private writeToLog(message: string, level: LogLevel, params: any[]): void {
    if (this.shouldLog(level)) {
      let entry: LogEntry = new LogEntry();
      entry.message = message;
      entry.level = level;
      entry.extraInfo = params;
      entry.logWithDate = this.logWithDate;

      const value = entry.buildLogString();
      for (const logger of this.publishers) {
        logger.log(entry).subscribe(response => console.log);
      }
    }
  }

  log(message: string, ...optionalParams: any[]) {
    this.writeToLog(message, LogLevel.All, optionalParams);
  }

  debug(message: string, ...optionalParams: any[]) {
    this.writeToLog(message, LogLevel.Debug, optionalParams);
  }

  warning(message: string, ...optionalParams: any[]) {
    this.writeToLog(message, LogLevel.Warn, optionalParams);
  }

  error(message: string, ...optionalParams: any[]) {
    this.writeToLog(message, LogLevel.Error, optionalParams);
  }

  fatal(message: string, ...optionalParams: any[]) {
    this.writeToLog(message, LogLevel.Fatal, optionalParams);
  }
}
