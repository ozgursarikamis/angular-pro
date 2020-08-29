import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Nav } from "./shared/models/Nav";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnChanges {
  nav: Nav[] = [
    {
      link: "/",
      name: "Home",
      exact: true,
    },
    {
      link: "/opps",
      name: "404",
      exact: false,
    },
  ];
  constructor() { }
  ngOnInit(): void {
    console.log("ngOninit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
