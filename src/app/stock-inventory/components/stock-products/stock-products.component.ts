import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit {

  @Input() parent: FormGroup;

  @Output() removed = new EventEmitter<any>();

  get stocks(): AbstractControl[] {
    return (this.parent.get('stock') as FormArray).controls;
  }

  onRemove(group, index) {
    this.removed.emit({ group, index })
  }

  constructor() { }

  ngOnInit(): void { }
}
