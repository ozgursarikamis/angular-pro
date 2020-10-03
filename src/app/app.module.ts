import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';

import { DataService } from "./data/data.service";
import { HttpClientModule } from "@angular/common/http";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    UserSettingsFormComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	FormsModule,
	HttpClientModule,
	ButtonsModule,
	BsDatepickerModule.forRoot(),
	BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
