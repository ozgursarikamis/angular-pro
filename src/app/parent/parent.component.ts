import { Component, OnInit } from "@angular/core";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.scss"]
})
export class ParentComponent implements OnInit {
  name: string;

  constructor() { }

  ngOnInit() {
  }

  getMessageFromChild(message: string) {
    console.log(message);
  }

  changeMyName() {
    this.name = uuidv4().toString();
  }
}
