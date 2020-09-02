import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthFormComponent } from "./auth-form/auth-form.component";
import { AuthRememberComponent } from "./auth-remember/auth-remember.component";
import { AuthMessageComponent } from "./auth-message/auth-message.component";

@NgModule({
  declarations: [
    AuthFormComponent, AuthRememberComponent, AuthMessageComponent
  ],
  exports: [
    AuthFormComponent, AuthRememberComponent, AuthMessageComponent
  ],
  entryComponents: [ AuthFormComponent ], // <-- this component will be generated at runtime
  imports: [
    CommonModule, FormsModule
  ]
})
export class AuthFormModule {}
