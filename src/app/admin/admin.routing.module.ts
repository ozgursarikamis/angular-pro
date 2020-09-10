import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardGuard } from "./dashboard/dashboard.guard";
import { DashboardChildGuard } from "./dashboard/dashboard.child.guard";
import { DashboardLeavingGuard } from "./dashboard/dashboard.leaving.guard";

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [DashboardGuard],
    canActivateChild: [DashboardChildGuard],
    canDeactivate: [DashboardLeavingGuard]
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DashboardGuard, DashboardChildGuard, DashboardLeavingGuard],
})
export class AdminRoutingModule { }
