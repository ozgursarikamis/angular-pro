import { ProductsService } from './services/products.service';
import { Component, OnInit } from "@angular/core";
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

  constructor(
	  private service: ProductsService,
	  private router: Router 
	  ) { 
		  // detecting route changes:
		this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                // Show loading indicator and perform an action
            }

            if (event instanceof NavigationEnd) {
                // Hide loading indicator and perform an action
            }

            if (event instanceof NavigationEnd) {
                // Hide loading indicator and perform an action
                console.log(event); // It logs an error for debugging
            }
        });
	  }

  ngOnInit(): void {
	  this.service.getProducts().subscribe(response => {
		  console.log('response :>> ', response);
	  });
  }
}

if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker('./app.worker', { type: 'module' });
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}