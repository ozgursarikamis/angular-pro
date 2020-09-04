import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StockCounterComponent),
  multi: true
};

@Component({
  selector: 'app-stock-counter',
  providers: [COUNTER_VALUE_ACCESSOR],
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.scss']
})
export class StockCounterComponent implements OnInit, ControlValueAccessor {

  @Input() step: number = 10;
  @Input() min: number = 10;
  @Input() max: number = 1000;

  value: number = 0;

  increment() {
    if (this.value < this.max) {
      this.value = this.value + this.step;
    }
  }

  decrement() {
    if (this.value > this.min) {
      this.value = this.value - this.step;
    }
  }

  constructor() { }

  writeValue(obj: any): void { }
  registerOnChange(fn: any): void { }
  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }
}
