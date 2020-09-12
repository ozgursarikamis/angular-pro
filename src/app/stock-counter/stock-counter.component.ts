import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stock-counter',
  templateUrl: './stock-counter.component.html'
})
export class StockCounterComponent implements OnInit {

  @Input() step: number = 1;
  @Input() min: number = 0;
  @Input() max: number = 100;

  @Output() changed = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  value: number = 0;
  focused: boolean;

  increment() {
    if (this.value < this.max) {
      this.value = this.value + this.step;
      this.changed.emit(this.value);
    }
  }

  decrement() {
    if (this.value > this.min) {
      this.value = this.value - this.step;
      this.changed.emit(this.value);
    }
  }

  private onBlur(event: FocusEvent) {
    this.focused = false;
    event.preventDefault();
    event.stopPropagation();
  }

  private onKeyUp(event: KeyboardEvent) {
    let handlers = {
      ArrowDown: () => this.decrement(),
      ArrowUp: () => this.increment()
    };

    if (handlers[event.code]) {
      handlers[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }
  }

  private onFocus(event: FocusEvent) {
    this.focused = true;
    event.preventDefault();
    event.stopPropagation();
  }

}
