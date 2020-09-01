import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-auth-remember",
  templateUrl: "auth-remember.component.html"
})
export class AuthRememberComponent {
  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChecked(checked: boolean) {
    this.checked.emit(checked);
  }
}
