import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersService } from "./users.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { UserFormComponent } from "./form/user-form.component";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "users", component: DashboardComponent }
];
@NgModule({
  declarations: [ DashboardComponent, UserFormComponent ],
  imports: [
    CommonModule, HttpClientModule, FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [ UsersService ],
  // exports: [ DashboardComponent ]
})
export class UsersModule {
}
