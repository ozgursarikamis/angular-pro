import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
	username: string = 'Judith';
	@Output() getData = new EventEmitter<string>();

	constructor() { }

	ngOnInit(): void { }

	getDataEmitter() {
		this.getData.emit(this.username);
	}
}
