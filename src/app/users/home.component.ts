import { Component } from "@angular/core";

@Component({
  selector: 'app-home',
  template:`<p>
    Home component works
  </p>`
})
export class HomeComponent {
  constructor(){
    console.log('HomeComponent');
  }
}
