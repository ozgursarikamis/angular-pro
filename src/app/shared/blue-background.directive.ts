import { stringify } from '@angular/compiler/src/util';
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBlueBackground]',
})
export class BlueBackgroundDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.elementRef.nativeElement.style.backgroundColor = 'blue';
    this.elementRef.nativeElement.style.color = 'wheat';
    this.elementRef.nativeElement.style.padding = '1.5rem';
  }

//   @HostListener('mouseover')
//   onMouseOver() {
//     this.ChangeBgColor('red');
//   }

  @HostListener('click')
  onClick() {
	  window.alert("Host Element Clicked");
  }

  @HostListener('mouseleave')
  onMouseLeave() {
	  this.ChangeBgColor('black');
  }

  ChangeBgColor(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
  }

  @HostBinding('style.border') border: string;

  @HostListener('mouseover') 
  onMouseOver2() {
	  this.border = '5px solid red';
  }
}
