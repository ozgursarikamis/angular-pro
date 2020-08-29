import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
// import { NotFoundComponent } from "./landing-pages/not-found/not-found.component";
// import { ParentComponent } from "./parent/parent.component";

const routes: Routes = [
  { path: "", redirectTo: "users", pathMatch: "full" },
  // { path: "parent", component: ParentComponent },
  // { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
