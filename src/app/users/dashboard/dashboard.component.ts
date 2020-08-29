import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users.service";
import { User } from "../../shared/models/users";

@Component({
  selector: "app-users-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: [ "./dashboard.component.scss" ]
})
export class DashboardComponent implements OnInit {
  users: User[];

  constructor(
    private service: UsersService
  ) {
    console.log("dashboard.dashboard.component");
  }

  ngOnInit(): void {
    this.service.getPassengers().subscribe(users => {
      this.users = users;
    });
  }
}
