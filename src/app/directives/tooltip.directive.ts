import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[toolTip]',
  exportAs: 'toolTip'
})
export class TooltipDirective implements OnInit {

  tooltipElement = document.createElement("div");
  visible = false;

  @Input()
  set tooltip(v: string) {
    this.tooltipElement.textContent = v;
  }

  hide() {
    this.tooltipElement.classList.remove("tooltip--active");
  }
  show() {
    this.tooltipElement.classList.add("tooltip--active");
  }

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.tooltipElement.className = "tooltip";
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add("tooltip-container");
  }
}
