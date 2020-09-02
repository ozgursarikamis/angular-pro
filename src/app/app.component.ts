import { Component, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit, AfterViewInit } from "@angular/core";
import { User } from "../models/User";
import { AuthFormComponent } from './auth/auth-form/auth-form.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild("entry", { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  ngAfterViewInit(): void {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    const component = this.entry.createComponent(authFormFactory);

    component.instance.title = "Create Account"; // Overriding component value because no Input decorations allowed in dynamic components

    component.instance.submitted.subscribe(this.loginUser); // subscribing output element
  }

  loginUser(user: User) {
    console.log('user :>> ', user);
  }
}
