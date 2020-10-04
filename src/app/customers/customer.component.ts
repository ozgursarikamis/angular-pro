import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Customer } from "./customer";

function ratingRange(min: number, max: number): ValidatorFn {
	return (c: AbstractControl): { [key: string]: boolean } | null => {
		if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
			return { 'range': true }
		}
		return null;
	}
}
function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
	const emailControl = c.get('email');
	const confirmEmailControl = c.get('confirmEmail');

	if (emailControl.value === confirmEmailControl.value) {
		return null; // skip validation
	}
	return { 'match': true };
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
			emailGroup: this.formBuilder.group({
				email: ['', [Validators.required, Validators.email]],
				confirmEmail: ['', [Validators.required, Validators.email]],
			}, { validator: emailMatcher }),
			phone: '',
			notification: 'email',
			rating: ['', ratingRange(1,3)],
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
