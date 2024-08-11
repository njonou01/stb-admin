import { Component, ContentChildren, QueryList, Input, AfterContentInit, ElementRef, OnInit, HostListener } from '@angular/core';
import { CarouselItemComponent } from '@/shared/components/carousel-item/carousel-item.component';
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements AfterContentInit, OnInit {
  @ContentChildren(CarouselItemComponent) items!: QueryList<CarouselItemComponent>;
  @Input() timing = '250ms ease-in';
  @Input() showCount: number | { [key: string]: number } = { xs: 1, sm: 2, md: 3, lg: 4 };

  private player!: AnimationPlayer;
  private itemWidth!: number;
  private currentSlide = 0;
  carouselWrapperStyle = {};

  constructor(private builder: AnimationBuilder, private el: ElementRef) {}

  ngOnInit() {
    this.updateItemsToShow();
  }

  ngAfterContentInit() {
    this.updateItemsWidth();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateItemsToShow();
    this.updateItemsWidth();
  }

  private updateItemsToShow() {
    let count: number;
    if (typeof this.showCount === 'number') {
      count = this.showCount;
    } else {
      const width = window.innerWidth;
      if (width < 576) count = this.showCount['xs'];
      else if (width < 768) count = this.showCount['sm'];
      else if (width < 992) count = this.showCount['md'];
      else count = this.showCount['lg'];
    }
    this.carouselWrapperStyle = { width: `${100 / count}%` };
  }

  private updateItemsWidth() {
    const count = this.getVisibleItemsCount();
    this.itemWidth = 100 / count;
    this.items.forEach((item, index) => {
      item.width = `${this.itemWidth}%`;
      item.left = `${index * this.itemWidth}%`;
    });
  }

  private getVisibleItemsCount(): number {
    if (typeof this.showCount === 'number') return this.showCount;
    const width = window.innerWidth;
    if (width < 576) return this.showCount['xs'];
    if (width < 768) return this.showCount['sm'];
    if (width < 992) return this.showCount['md'];
    return this.showCount['lg'];
  }

  next() {
    const visibleItems = this.getVisibleItemsCount();
    if (this.currentSlide + visibleItems < this.items.length) {
      this.currentSlide++;
      this.transitionCarousel();
    }
  }

  prev() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.transitionCarousel();
    }
  }

  private transitionCarousel() {
    const myAnimation: AnimationFactory = this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${this.currentSlide * this.itemWidth}%)` }))
    ]);
    this.player = myAnimation.create(this.el.nativeElement.querySelector('.carousel-items'));
    this.player.play();
  }
}
