import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AuthFormModule } from "./auth/auth-form.module";
import { AppComponent } from "./app.component";

import { ExampleOneComponent } from "./example/example-one.component";
import { ExampleTwoComponent } from "./example/example-two.component";
import { ExampleThreeComponent } from "./example/example-three.component";

import { CreditCardDirective } from "./directives/credit-card.directive";
import { TooltipDirective } from './directives/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
    ExampleTwoComponent,
    ExampleThreeComponent,
    CreditCardDirective,
    TooltipDirective
  ],
  imports: [
    AuthFormModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
