import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from 'rxjs';
import { AdminRoutingModule } from "./admin/admin.routing.module";

export class CustomPreload implements PreloadingStrategy {

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    // tell angular which route you want to preload:
    return route.data && route.data.preload ? fn()
      : of(null);
  }
}
const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  {
    path: "admin", data: { preload: true },
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
];

@NgModule({
  providers: [CustomPreload],
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreload }), AdminRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
