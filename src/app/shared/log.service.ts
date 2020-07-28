import { Injectable } from '@angular/core';

export enum LogLevel {
  All, Debug, Info, Warn, Error, Faatal, Off
}

@Injectable({ providedIn: 'root'})
export class LogService {
  level: LogLevel = LogLevel.All;
  logWithDate = true;

  constructor() {  }

  private shouldLog(level: LogLevel): boolean {
    this.level = LogLevel.Off;
    return this.level !== LogLevel.Off && level >= this.level;
  }

  private writeToLog(message: string, level: LogLevel): void {
    if (this.shouldLog(level)) {
      let value = '';
      if (this.logWithDate) {
        value = new Date() + ' - ';
      }
      value += `Type: ${LogLevel[level]}`;
      value += ` - Message: ${JSON.stringify(message)}`;
      console.log(value);
    }
  }

  log(message: any) {
      this.writeToLog(message, LogLevel.All);
  }
}
