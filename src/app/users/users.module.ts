import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersService } from "./users.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [ UsersService ],
  exports: [ DashboardComponent ]
})
export class UsersModule {
}
