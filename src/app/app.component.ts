import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { User } from "../models/User";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnChanges {
  rememberMe = false;
  constructor() { }
  ngOnInit(): void {
    console.log("ngOninit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  createUser(user: User) {
    console.log("Create User Account", user, this.rememberMe);
  }

  loginUser(user: User) {
    console.log("Login", user, this.rememberMe);
  }

  rememberUser($event: boolean) {
    this.rememberMe = $event;
    console.log("Remember me?", $event);
  }
}
