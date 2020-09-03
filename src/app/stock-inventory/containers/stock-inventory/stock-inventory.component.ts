import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, Form, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-stock-inventory',
  styleUrls: ['stock-inventory.component.scss'],
  templateUrl: './stock-inventory.component.html'
})
export class StockInventoryComponent implements OnInit {

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(),
      code: new FormControl()
    }),
    selector: new FormGroup({
      product_id: new FormControl(''),
      quantity: new FormControl(10)
    }),
    stock: new FormArray([])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('Submit: ', this.form.value);
  }

}
