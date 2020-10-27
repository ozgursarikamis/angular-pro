import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlueBackgroundDirective } from './shared/blue-background.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RouterModule } from '@angular/router';
import { ParameterizedPipe } from './shared/parameterized.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlueBackgroundDirective,
    ParentComponent,
    ChildComponent,
    ParameterizedPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
	RouterModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
