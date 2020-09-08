import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './users/home.component';
import { UsersComponent } from './users/users.component';

import { UserResolverService } from "./resolvers/user-resolver.service";

const routes: Routes = [
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'users', component: UsersComponent,
      resolve: { routeResolver: UserResolverService }
  },
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
