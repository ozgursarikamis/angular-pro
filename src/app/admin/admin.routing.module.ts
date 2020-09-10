import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardGuard } from "./dashboard/dashboard.guard";
import { DashboardChildGuard } from "./dashboard/dashboard.child.guard";

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [DashboardGuard], canActivateChild: [DashboardChildGuard]
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DashboardGuard, DashboardChildGuard],
})
export class AdminRoutingModule { }
