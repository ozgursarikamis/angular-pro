import {
  Component, EventEmitter, Output, ContentChildren, AfterContentInit, QueryList,
  ViewChild, AfterViewInit, ViewChildren
} from "@angular/core";
import { User } from "../../../models/User";
import { AuthRememberComponent } from "../auth-remember/auth-remember.component";
import { AuthMessageComponent } from "../auth-message/auth-message.component";

@Component({
  selector: "app-auth-form",
  templateUrl: "auth-form.component.html"
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;

  ngAfterViewInit(): void {
    // ContentChildren is only available here!
    if (this.message) {
      // this.message.forEach((message) => {
      //   message.days = 30; // <-- ExpressionChangedAfterItHasBeenCheckedError
      // });
      setTimeout(() => {
        let i = 27;
        this.message.forEach(message => {
          message.days = i;
          i++;
        })
      });
    }
  }

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  ngAfterContentInit(): void {
    console.log('this.remember :>> ', this.remember);
    this.remember.forEach(item => {
      item.checked.subscribe((x: boolean) => this.showMessage = x);
    });
    // if (this.message) {
    //   this.message.days = 24;
    // }
  }

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  showMessage: boolean;

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
