import { Injectable } from '@angular/core';

export enum LogLevel {
  All, Debug, Info, Warn, Error, Fatal, Off
}

@Injectable({ providedIn: 'root'})
export class LogService {
  level: LogLevel = LogLevel.All;
  logWithDate = true;

  constructor() {  }

  private shouldLog(level: LogLevel): boolean {
    // this.level = LogLevel.Off;
    return this.level !== LogLevel.Off && level >= this.level;
  }

  private formatParams(params: any) {
    let ret: string = params.join(",");
    if (params.some((p: any) => typeof p == "object")) {
      ret = "";
      for (const item in params) {
        ret += JSON.stringify(item) + ",";
      }
    }
    return ret;
  }

  private writeToLog(message: string, level: LogLevel, params: any[]): void {
    if (this.shouldLog(level)) {
      let value = '';
      if (this.logWithDate) {
        value = new Date() + ' - ';
      }
      value += `Type: ${LogLevel[level]}`;
      value += ` - Message: ${JSON.stringify(message)}`;
      value += ` - Extra Info: ${ this.formatParams(params) }`;
      console.log(value);
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
