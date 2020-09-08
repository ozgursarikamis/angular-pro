import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ResolveOneComponent } from "./resolvers/resolve-one/resolve-one.component";
import { ResolveHomeComponent } from './resolvers/resolve-home/resolve-home.component';

import { RouteResolver } from "./resolvers/app-resolver";

const routes: Routes = [
  {
    path: '', component: ResolveHomeComponent
  },
  {
    path: 'one/:name',
    component: ResolveOneComponent,
    resolve: {
      cres: RouteResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [RouteResolver]
})
export class AppRoutingModule { }
