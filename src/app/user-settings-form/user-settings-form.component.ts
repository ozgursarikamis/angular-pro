import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { UserSettings } from "../data/user-settings";

@Component({
	selector: 'app-user-settings-form',
	templateUrl: './user-settings-form.component.html',
	styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent implements OnInit {

	originalUserSettings: UserSettings = {
		emailOffers: null,
		name: null,
		interfaceStyle: null,
		subscriptionType: null,
		notes: null
	}

	userSettings: UserSettings = { ...this.originalUserSettings };
	constructor(private service: DataService) { }

	ngOnInit(): void {
	}

	onSubmit(form: NgForm) {
		console.log('in onSubmit: ', form.valid);
		this.service.postUserSettingsForm(this.userSettings).subscribe(
			result => console.log('success:', result),
			error => console.error('error: ', error)
		);
	}

	onBlur(field: NgModel){
		console.log('in onBlur', field.valid);		
	}

}
