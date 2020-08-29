import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersService } from "./users.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { UserFormComponent } from "./form/user-form.component";

const components = [
  DashboardComponent, UserFormComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [ UsersService ],
  exports: components
})
export class UsersModule {
}
