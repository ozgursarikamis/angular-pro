import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() products: Product[];

  @Output() added = new EventEmitter<any>();
  onAdd() {
    this.added.emit(this.parent.get('selector').value);
    this.parent.get("selector").patchValue({
      product_id: '',
    });
  }

  get stockExists() {
    return (
      this.parent.hasError('stockExists') && this.parent.get('selector.product_id').dirty
    );
  }

  get notSelected() {
    return (
      !this.parent.get('selector.product_id').value
    )
  }

  constructor() { }

  ngOnInit(): void { }
}
