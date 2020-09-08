import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolve-one',
  templateUrl: './resolve-one.component.html',
  styleUrls: ['./resolve-one.component.scss']
})
export class ResolveOneComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    console.log('ResolveOneComponent');
  }

  ngOnInit() {
  }

}
