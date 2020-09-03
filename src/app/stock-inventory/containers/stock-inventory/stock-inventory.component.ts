import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Product, Item } from '../../models/product';
import { Observable, forkJoin } from 'rxjs';
import { StockInventoryService } from '../../services/stock-inventory.service';

@Component({
  selector: 'app-stock-inventory',
  styleUrls: ['stock-inventory.component.scss'],
  templateUrl: './stock-inventory.component.html'
})
export class StockInventoryComponent implements OnInit {
  products: Product[];

  form = this.builder.group({
    store: this.builder.group({
      branch: '',
      code: ''
    }),
    selector: this.createStock({}),
    stock: this.builder.array([])
  });

  createStock(stock) {
    return this.builder.group({
      product_id: parseInt(stock.product_id, 10) || '',
      quantity: stock.quantity || 10
    });
  }

  addStock(stock) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({ group, index }: { group: FormGroup, index: number }) {
    // console.log(group, index);
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }

  constructor(private builder: FormBuilder, private service: StockInventoryService) { }

  ngOnInit(): void {
    const cart = this.service.getCartItems();
    const products = this.service.getProducts();

    forkJoin(cart, products).subscribe(x => console.log('x', x));
  }

  onSubmit() {
    console.log('Submit: ', this.form.value);
  }

}
