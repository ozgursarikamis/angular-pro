import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Product } from '../../models/product';
@Component({
  selector: 'app-stock-inventory',
  styleUrls: ['stock-inventory.component.scss'],
  templateUrl: './stock-inventory.component.html'
})
export class StockInventoryComponent implements OnInit {

  products: Product[] = [
    { id: 1, price: 2800, name: "MacBook Pro" },
    { id: 2, price: 50, name: "UCB-C Adaptor" },
    { id: 3, price: 400, name: "iPod" },
    { id: 4, price: 900, name: "iPhone" },
    { id: 5, price: 600, name: "Apple Watch" },
  ];

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(),
      code: new FormControl()
    }),
    selector: new FormGroup({
      product_id: new FormControl(''),
      quantity: new FormControl(10)
    }),
    stock: new FormArray([
     new FormGroup({
        product_id: new FormControl(3),
        quantity: new FormControl(50),
     })
    ])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Submit: ', this.form.value);
  }

}
