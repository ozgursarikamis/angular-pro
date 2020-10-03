import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
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

	postError: boolean;
	postErrorMessage: string;
	singleModel = "On";

	userSettings: UserSettings = { ...this.originalUserSettings };
	subsTypes: Observable<{ id: string, type: string }[]>;

	constructor(private service: DataService) { }

	ngOnInit(): void {
		this.subsTypes = this.service.getSubsTypes();
	}

	onSubmit(form: NgForm) {
		console.log('in onSubmit: ', form.value); 
	}

	onHttpError(errorResponse: any) {
		console.log('errorResponse :>> ', errorResponse);
		this.postError = true;
		this.postErrorMessage = errorResponse.message;
	}

	onBlur(field: NgModel){
		console.log('in onBlur', field.valid);		
	}

}
