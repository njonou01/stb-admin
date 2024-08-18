import { CommonModule,isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { RedButtonComponent } from '@/core/atoms/buttons/red-button/red-button.component';
import { CasesPartnerComponent } from '../cases/cases-partner/cases-partner.component';

@Component({
  selector: 'app-actuality-caroousel',
  standalone: true,
  imports: [CommonModule,RedButtonComponent,CasesPartnerComponent],
  templateUrl: './actuality-caroousel.component.html',
  styleUrl: './actuality-caroousel.component.scss'
})
export class ActualityCaroouselComponent {
  @Input() slides = [
    { srcBack: '../../../assets/images/case-partner/partner-img.png', title: 'Université de Nante', description: 'Description 1' }
    
    
  ];

  @Input() grayBack:boolean=false;

  currentIndex = 0;

  private intervalId: any;

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      this.stopAutoSlide();
    }
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); 
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.slides.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.slides.length - 1) ? this.currentIndex + 1 : 0;
  }

  getSlideIndex(relativeIndex: number): number {
    const length = this.slides.length;
    return (this.currentIndex + relativeIndex + length) % length;
  }


}
