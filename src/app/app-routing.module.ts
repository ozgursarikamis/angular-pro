import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AdminRoutingModule } from "./admin/admin.routing.module";

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  {
    path: "admin",
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), AdminRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
