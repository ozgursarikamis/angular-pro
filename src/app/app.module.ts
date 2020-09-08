import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ArticlesModule } from "./articles/articles.module";
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [	
    AppComponent,
      SidebarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
