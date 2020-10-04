import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
			firstName: ['', [Validators.required, Validators.minLength(3)]],
			lastName: ['', [Validators.required, Validators.minLength(50)]],
			email: ['', [Validators.required, Validators.email]],
			phone: '',
			notification: 'email',
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

	setNotification(notifyVia: string): void {
		const phoneControl = this.customerForm.get('phone');
		if (notifyVia === 'text') {
			phoneControl.setValidators(Validators.required);
		} else {
			phoneControl.clearValidators();
		}
		phoneControl.updateValueAndValidity();
	}

}
