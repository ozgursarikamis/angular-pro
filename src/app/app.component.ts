import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit, ComponentRef } from "@angular/core";
import { User } from "../models/User";
import { AuthFormComponent } from './auth/auth-form/auth-form.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  component: ComponentRef<AuthFormComponent>;

  @ViewChild("entry", { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  ngAfterViewInit(): void {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.component = this.entry.createComponent(authFormFactory);
    this.component.instance.title = "Create Account"; // Overriding component value because no Input decorations allowed in dynamic components
    this.component.instance.submitted.subscribe(this.loginUser); // subscribing output element
  }

  loginUser(user: User) {
    console.log('user :>> ', user);
  }

  destroyComponent() {
    console.log('this.component :>> ', this.component);
    this.component.destroy();
  }
}
