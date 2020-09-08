import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from '@angular/common/http';

import { UsersService } from "./users/users.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersComponent } from './users/users.component';

import { HomeComponent } from "./users/home.component";
import { UserResolverService } from './resolvers/user-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
      UsersComponent,
      HomeComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UsersService, UserResolverService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
