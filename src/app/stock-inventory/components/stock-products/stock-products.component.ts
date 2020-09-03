import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit {

  @Input() parent: FormGroup;
  @Input() map: Map<number, Product>;

  @Output() removed = new EventEmitter<any>();

  product: Product;
  get stocks(): AbstractControl[] {
    return (this.parent.get('stock') as FormArray).controls;
  }

  getProduct(id) {
    for (let [key, value] of this.map) {
      if (key === id.toString()) {
        return value;
      }
    }
  }

  onRemove(group, index) {
    this.removed.emit({ group, index })
  }

  constructor() { }

  ngOnInit(): void { }
}
