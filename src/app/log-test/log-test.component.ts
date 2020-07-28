import { Component, OnInit } from '@angular/core';
import { LogService, } from '../shared/log.service';
import { Product } from "./product";
import { LogEntry } from '../shared/log.entry';
import { LocalStorage } from '../shared/loggers/log.localstorage';
@Component({
  selector: 'app-log-test',
  templateUrl: './log-test.component.html',
  styleUrls: ['./log-test.component.scss']
})
export class LogTestComponent implements OnInit {
  logEntries: LogEntry[];

  constructor(private logService: LogService){ }
  ngOnInit(): void { }
  testlog(): void {
    this.logService.log('Test the log method', "Paul", "John", 2, 3);
  }

  getLocalStorage(): void {
    const temp = this.logService.publishers.find(p => p.constructor.name === 'LocalStorage');
    if (temp) {
      let local = temp as LocalStorage;
      local.getAll().subscribe(response => this.logEntries = response);
    }
  }
  clearLog(): void {
    this.logService.clear();
  }
  productLog(): void {
    let product: Product = new Product();
    product.id = 1;
    product.name = 'A New Product';
    product.introductionDate = new Date();
    product.price = 10;
    product.url = 'www.fairwaytech.com';
    this.logService.log('this is a product object', product);
  }
}
