import { LogLevel } from "./log.level";

export class LogEntry {
  entryDate: Date = new Date();
  message: string;
  level: LogLevel = LogLevel.All;
  extraInfo: any[] = [];
  logWithDate: boolean = true;

  buildLogString(): string {
    let ret: string = "";
    if (this.logWithDate) {
      ret = `${new Date()} - `;
    }
    ret += `Type: ${LogLevel[this.level]}`;
    ret += ` - Message: ${this.message}`;
    if (this.extraInfo.length) {
      ret += ` - Extra Info: ${this.formatParams(this.extraInfo)}`;
    }
    return ret;
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
}
