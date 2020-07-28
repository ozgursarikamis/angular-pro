import { Component, OnInit } from '@angular/core';
import { LogService } from '../shared/log.service';

@Component({
  selector: 'app-log-test',
  templateUrl: './log-test.component.html',
  styleUrls: ['./log-test.component.scss']
})
export class LogTestComponent implements OnInit {

  constructor(private logService: LogService){ }

  ngOnInit(): void {
  }

  testlog(): void {
    this.logService.log('Test the log method');
  }

}
