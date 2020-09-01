import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthFormComponent } from "./auth-form.component";

@NgModule({
  declarations: [
    AuthFormComponent
  ],
  exports: [
    AuthFormComponent
  ],
  imports: [
    CommonModule, FormsModule
  ]
})
export class AuthFormModule {}
