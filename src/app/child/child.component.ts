import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"]
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() name: string;
  @Output() messageBack = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.messageBack.emit("this is a message emitted from child component");

      // ngOnChanges gets called before ngOnInit and whenever a component's
      // bound input is changed FROM THE PARENT COMPONENT.
  }
}
