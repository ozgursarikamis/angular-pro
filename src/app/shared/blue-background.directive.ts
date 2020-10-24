import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appBlueBackground]"
})
export class BlueBackgroundDirective {

  constructor(elementRef: ElementRef) {
	  elementRef.nativeElement.style.backgroundColor = "blue";
	  elementRef.nativeElement.style.color = "wheat";
	  elementRef.nativeElement.style.padding = "1.5rem";
  }
}
