import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// Decorator 
@Directive({
  selector: '[appColorizer]', // attribute directive
  standalone: true,
})
export class ColorizerDirective {
  sectionElement: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log('INSIDE COLORIZER DIRECTIVE');
    // Step 1: let's find the element in which the directive is applied

    console.log(this.elementRef);

    this.sectionElement = this.elementRef.nativeElement;
    // Step2: then, let's change the bg color, text color, etc,.
    this.renderer.setStyle(this.sectionElement, 'background-color', 'red');
    this.renderer.setStyle(this.sectionElement, 'color', '#fff');
    this.renderer.setStyle(this.sectionElement, 'border', 'dashed 5px blue');
    this.renderer.setStyle(this.sectionElement, 'height', '200px');

    this.createPoweredByText();
  }

  createPoweredByText() {
    const paraElement = this.renderer.createElement('p'); // <p></p>
    const paraText = this.renderer.createText('Powered By Colorizer Directive'); // Powered By Colorizer Directive
    this.renderer.setStyle(paraElement, 'font-size', '12px');
    this.renderer.setStyle(paraElement, 'color', '#ddd');
    this.renderer.setStyle(paraElement, 'font-style', 'italic');
    this.renderer.setStyle(paraElement, 'float', 'right');

    this.renderer.appendChild(paraElement, paraText); // <p> Powered By Colorizer Directive</p>
    this.renderer.appendChild(this.sectionElement, paraElement); // adding the para into the section element
  }

  @HostListener('click', ['$event'])
  handleClick(event: any) {
    console.log(event.target);
    this.renderer.setStyle(event.target, 'background-color', 'lightgreen');
    console.log('Clicked');
  }
}
