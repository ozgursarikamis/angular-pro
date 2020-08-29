import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-home",
  styleUrls: ["home.component.scss"],
  templateUrl: "home.component.html"
})
export class HomeComponent implements OnInit, OnChanges {
  constructor() { }
  ngOnInit(): void {
    console.log("ngOninit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
