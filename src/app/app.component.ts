import { Component, ViewChild, ViewContainerRef, TemplateRef, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild("entry", { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild("tmpl") tmpl: TemplateRef<any>;

  ngAfterViewInit(): void {
    this.entry.createEmbeddedView(this.tmpl, { location: "Manchester, UK" });
  }
}
