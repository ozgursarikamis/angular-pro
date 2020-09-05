import { Component, OnInit } from '@angular/core';
import { Mail } from '../../models/mail.interface';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mail-folder',
  templateUrl: './mail-folder.component.html',
  styleUrls: ['./mail-folder.component.scss']
})
export class MailFolderComponent implements OnInit {

  // data: Observable<{ messages: Mail[] }> = this.route.data;
  data = this.route.data;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { }
}
