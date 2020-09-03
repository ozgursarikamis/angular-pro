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
      branch: new FormControl('1234'),
      code: new FormControl('5678')
    })
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('Submit: ', this.form.value);
  }

}
