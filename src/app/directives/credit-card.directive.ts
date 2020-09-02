import { Directive, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
  selector: '[credit-card]'
})
export class CreditCardDirective {
  // constructor(private element: ElementRef, renderer: Renderer2) {
  //   console.log('this.element', this.element);
  //   element.nativeElement.style.backgroundColor = "yellow";

  //   renderer.setStyle(element.nativeElement, "font-size", "24px");
  // }

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    input.value = numbers.join(' ');

  }
}
