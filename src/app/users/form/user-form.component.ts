import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { User } from "../../shared/models/users";
import { UsersService } from "../users.service";

@Component({
  selector: "app-user-form",
  styleUrls: ["user-form.component.scss"],
  templateUrl: "user-form.component.html"
})
export class UserFormComponent implements OnChanges {
  @Input() user: User;
  userToView: User;
  constructor(private service: UsersService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.userToView = this.user;
  }
}
