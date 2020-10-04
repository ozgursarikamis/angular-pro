import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from "./customer";

@Component({
	selector: 'app-customers',
	templateUrl: './customer.component.html',
	styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
	customerForm: FormGroup;
	customer = new Customer();

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.customerForm = this.formBuilder.group({
			firstName: '',
			lastName: { value: 'n/a', disabled: true },
			email: '',
			sendCatalog: true
		});
	 }

	 populateTestData() {
		 this.customerForm.patchValue({
			 firstName: 'Jack',
			 lastName: 'Harkness',
			 sendCatalog: false
		 });
	 }

	save() {
		console.log(this.customerForm);
		console.log('Saved: ', this.customerForm.value);
	}

}
