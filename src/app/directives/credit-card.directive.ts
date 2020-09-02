import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: '[credit-card]'
})
export class CreditCardDirective {
  constructor(private element: ElementRef, renderer: Renderer2) {
    console.log('this.element', this.element);
    element.nativeElement.style.backgroundColor = "yellow";

    renderer.setStyle(element.nativeElement, "font-size", "24px");
  }
}
