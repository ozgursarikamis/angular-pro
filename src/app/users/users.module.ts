import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersService } from "./users.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { UserFormComponent } from "./form/user-form.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ DashboardComponent, UserFormComponent ],
  imports: [
    CommonModule, HttpClientModule, FormsModule
  ],
  providers: [ UsersService ],
  exports: [ DashboardComponent ]
})
export class UsersModule {
}
