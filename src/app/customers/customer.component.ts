import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Customer } from "./customer";

@Component({
	selector: 'app-customers',
	templateUrl: './customer.component.html',
	styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
	customerForm: FormGroup;
	customer = new Customer();

	constructor() { }

	ngOnInit(): void {
		this.customerForm = new FormGroup({
			firstName: new FormControl(),
			lastName: new FormControl(),
			email: new FormControl(),
			sendCatalog: new FormControl(true),
		});
	 }

	save() {
		console.log(this.customerForm);
		console.log('Saved: ', this.customerForm.value);
	}

}
