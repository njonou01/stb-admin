import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './carousel-item.component.scss',
  template: '<ng-content></ng-content>',
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
  `]
})
export class CarouselItemComponent {
  @HostBinding('style.width') width!: string;
  @HostBinding('style.left') left!: string;
  @HostBinding('style.position') position = 'absolute';
}
