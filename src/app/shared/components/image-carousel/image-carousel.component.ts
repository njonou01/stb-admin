import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.scss'
})
export class ImageCarouselComponent {
  @Input() images: string[] = [];
  @Input() summary! :{address : string , type : string , monthlyFee : number}
  currentIndex = 0;

  ngOnInit(): void {}

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
