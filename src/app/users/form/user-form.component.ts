import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { User } from "../../shared/models/users";
import { UsersService } from "../users.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { logger } from "codelyzer/util/logger";
import { of } from "rxjs";

@Component({
  selector: "app-user-form",
  styleUrls: ["user-form.component.scss"],
  templateUrl: "user-form.component.html"
})
export class UserFormComponent implements OnChanges, OnInit {
  @Input() user: User;
  @Output() update: EventEmitter<User> = new EventEmitter<User>();
  userToView: User;
  userList: User[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: UsersService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.userToView = this.user;
  }

  toggleUsername(username: string) {
    console.log(username);
  }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((value: Params) => {
        return this.service.getUserById(value.id);
      }
    ))
      .subscribe(x => this.userToView = x);
    ;

    this.service.getUsers()
      .subscribe(users => this.userList = users.filter(x => x.id > 5));
  }

  handleSubmit(value: User, isValid: boolean) {
    if (isValid) {
      this.update.emit(value);
    }
  }
}
