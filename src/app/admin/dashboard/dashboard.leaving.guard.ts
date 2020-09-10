import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

import { DashboardChildComponent } from "../dashboard-child/dashboard-child.component";

@Injectable()
export class DashboardLeavingGuard implements CanDeactivate<DashboardChildComponent> {
  canDeactivate(component: DashboardChildComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return window.confirm("are you sure?");
  }

}
