import {
  Component, EventEmitter, Output, ContentChildren, AfterContentInit, QueryList,
  ViewChild, AfterViewInit
} from "@angular/core";
import { User } from "../../../models/User";
import { AuthRememberComponent } from "../auth-remember/auth-remember.component";
import { AuthMessageComponent } from "../auth-message/auth-message.component";

@Component({
  selector: "app-auth-form",
  templateUrl: "auth-form.component.html"
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;

  ngAfterViewInit(): void {
    console.log(this.message);
  }

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  ngAfterContentInit(): void {
    console.log('this.remember :>> ', this.remember);
    this.remember.forEach(item => {
      item.checked.subscribe((x: boolean) => this.showMessage = x);
    });
  }

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  showMessage: boolean;

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
