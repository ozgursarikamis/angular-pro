import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  Users: any = [];

  constructor(
    private service: UsersService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      console.log('data :>> ', data);
    });

    this.service.getUsers().subscribe((x: {}) => this.Users = x);
  }

}
