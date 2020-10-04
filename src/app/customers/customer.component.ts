import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from "./customer";

function ratingRange(c: AbstractControl): { [key: string]: boolean } | null {
	if (c.value !== null && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
		return { 'range': true } 
	}
	return null;
}
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
			rating: ['', ratingRange],
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
