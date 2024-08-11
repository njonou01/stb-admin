import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCarouselItem]',
  standalone: true
})
export class CarouselItemDirective {
  private _width: string = '100%';

  @Input() set width(value: string) {
    this._width = value;
    this.setWidth();
  }

  get width(): string {
    return this._width;
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.setWidth();
  }

  private setWidth() {
    this.el.nativeElement.style.flex = `0 0 ${this._width}`;
    this.el.nativeElement.style.maxWidth = this._width;
  }
}
