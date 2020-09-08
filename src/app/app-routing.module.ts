import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ArticleRoutingModule } from "./articles/article-routing.module";

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ArticleRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
