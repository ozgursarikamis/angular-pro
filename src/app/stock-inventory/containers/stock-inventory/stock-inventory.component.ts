import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { Product, Item } from "../../models/product";
import { forkJoin } from "rxjs";
import { StockInventoryService } from "../../services/stock-inventory.service";

@Component({
  selector: "app-stock-inventory",
  styleUrls: ["stock-inventory.component.scss"],
  templateUrl: "./stock-inventory.component.html"
})
export class StockInventoryComponent implements OnInit {
  products: Product[];
  productMap: Map<number, Product>;
  total: number;

  form = this.builder.group({
    store: this.builder.group({
      branch: ['', Validators.required],
      code: ['', Validators.required],
    }),
    selector: this.createStock({}),
    stock: this.builder.array([])
  });

  createStock(stock) {
    return this.builder.group({
      product_id: parseInt(stock.product_id, 10) || "",
      quantity: stock.quantity || 10
    });
  }

  addStock(stock) {
    const control = this.form.get("stock") as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({ group, index }: { group: FormGroup, index: number }) {
    // console.log(group, index);
    const control = this.form.get("stock") as FormArray;
    control.removeAt(index);
  }

  constructor(private builder: FormBuilder, private service: StockInventoryService) { }

  ngOnInit(): void {
    const cart = this.service.getCartItems();
    const products = this.service.getProducts();

    forkJoin(cart, products).subscribe(
      ([cart, products]: [Item[], Product[]]) => {
        const myMap = products
          .map<[number, Product]>(product => [product.id, product]);

        this.productMap = new Map<number, Product>(myMap);
        this.products = products;
        cart.forEach(item => this.addStock(item));

        this.form.get("stock").valueChanges
          .subscribe(value => this.calculateTotal(value));
      }
    );
  }


  calculateTotal(value: Item[]) {
    const total = value.reduce((prev, next) => {
      return prev + (next.quantity * this.productMap.get(next.product_id).price);
    }, 0);
    this.total = total;
  }

  onSubmit() {
    console.log("Submit: ", this.form.value);
  }
}
