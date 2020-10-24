import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
	username: string = 'Judith';
	constructor() { }

	ngOnInit(): void {
	}
}
