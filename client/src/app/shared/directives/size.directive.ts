import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSize]'
})
export class SizeDirective {

  constructor(private elementRef:ElementRef) {
    this.elementRef.nativeElement.style.fontSize='20px' 
   }

}
