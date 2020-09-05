import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-app',
  templateUrl: './mail-app.component.html',
  styleUrls: ['./mail-app.component.scss']
})
export class MailAppComponent implements OnInit {

  onActivate($event) {
    console.log('Activate $event', $event);
  }

  onDeactivate($event) {
    console.log('Deactivate $event', $event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
