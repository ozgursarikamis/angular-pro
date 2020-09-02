import { Component, Output, EventEmitter} from "@angular/core";
import { User } from 'src/models/User';
@Component({
  selector: "app-auth-form",
  templateUrl: "auth-form.component.html"
})
export class AuthFormComponent {
  title = "Login";

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
