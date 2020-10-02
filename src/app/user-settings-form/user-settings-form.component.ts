import { Component, OnInit } from '@angular/core';
import { UserSettings } from "../data/user-settings";

@Component({
	selector: 'app-user-settings-form',
	templateUrl: './user-settings-form.component.html',
	styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent implements OnInit {

	userSettings: UserSettings = {
		emailOffers: true,
		name: "Milton",
		interfaceStyle: "dark",
		subscriptionType: "annual",
		notes: "some note"
	}
	constructor() { }

	ngOnInit(): void {
	}

}
