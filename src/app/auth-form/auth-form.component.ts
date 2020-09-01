import { Component, EventEmitter, Output } from "@angular/core";
import { User } from "../../models/User";

@Component({
  selector: "app-auth-form",
  templateUrl: "auth-form.component.html"
})
export class AuthFormComponent {

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
