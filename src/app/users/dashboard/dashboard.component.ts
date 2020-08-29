import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { UsersService } from "../users.service";
import { User } from "../../shared/models/users";
import { Subscription } from "rxjs";

@Component({
  selector: "app-users-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: [ "./dashboard.component.scss" ]
})
export class DashboardComponent implements OnInit, AfterViewInit {
  public selectedUser: User;

  constructor(
    private service: UsersService
  ) {
    console.log("dashboard.dashboard.component");
  }
  users: User[];
  sub: Subscription;
  ngAfterViewInit(): void {
    // this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.service.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  userSelected(user: User) {
    this.selectedUser = user;
    console.log("selected: ", user);
  }

  onUpdateUser($event: User) {
    console.log($event);
  }
}
