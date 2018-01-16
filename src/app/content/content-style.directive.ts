import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appContentStyle]'
})
export class ContentStyleDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) {
    this.renderer.setAttribute(el.nativeElement,"style","margin:")
  }




}
