import { Component, OnInit } from '@angular/core';
import { Mail } from '../../models/mail.interface';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-mail-folder',
  templateUrl: './mail-folder.component.html',
  styleUrls: ['./mail-folder.component.scss']
})
export class MailFolderComponent implements OnInit {

  // data: Observable<{ messages: Mail[] }> = this.route.data;
  messages = this.route.data.pipe(pluck('messages'));

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { }
}
