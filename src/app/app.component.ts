import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnChanges {
  constructor() { }
  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
