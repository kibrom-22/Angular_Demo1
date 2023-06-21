import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(eleRef:ElementRef) { 
eleRef.nativeElement.style.background="yellow";
eleRef.nativeElement.style.color="black";

  }

}
