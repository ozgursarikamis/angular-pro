import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
	selector: 'app-parent',
	templateUrl: './parent.component.html',
	styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements AfterViewInit {
	username: string;
	@ViewChild(ChildComponent) child;

	constructor() { }

	data: any;
	getDataReceiver($event: any) {
		this.data = $event;
		console.log('this.data :>> ', this.data);
		console.log('$event :>> ', $event);
	}

	ngAfterViewInit(): void { // child component properties is read here: AfterViewInit
		this.username = this.child.username;
		console.log('this.username :>> ', this.username);
	}

}
