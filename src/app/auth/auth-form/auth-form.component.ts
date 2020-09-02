import { Component, EventEmitter, Output, ContentChild, AfterContentInit } from "@angular/core";
import { User } from "../../../models/User";
import { AuthRememberComponent } from "../auth-remember/auth-remember.component";

@Component({
  selector: "app-auth-form",
  templateUrl: "auth-form.component.html"
})
export class AuthFormComponent implements AfterContentInit {

  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;

  ngAfterContentInit(): void {
    if (this.remember) {
      this.remember.checked.subscribe((checked: boolean) => {
        this.showMessage = checked;
      });
    }
  }

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  showMessage: boolean;

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
