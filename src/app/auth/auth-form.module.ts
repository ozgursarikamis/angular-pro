import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthFormComponent } from "./auth-form/auth-form.component";
import { AuthRememberComponent } from "./auth-remember/auth-remember.component";

@NgModule({
  declarations: [
    AuthFormComponent, AuthRememberComponent
  ],
  exports: [
    AuthFormComponent, AuthRememberComponent
  ],
  imports: [
    CommonModule, FormsModule
  ]
})
export class AuthFormModule {}
