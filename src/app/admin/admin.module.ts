import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardChildComponent } from "./dashboard-child/dashboard-child.component";

@NgModule({
  declarations: [LoginComponent, DashboardComponent, DashboardChildComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
