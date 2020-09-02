import { Component, ViewChild, ViewContainerRef, TemplateRef, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {

  ctx = {
    $implicit: 'Todd Motto',
    location: 'England, UK'
  }
  ngAfterViewInit(): void {

  }
}
