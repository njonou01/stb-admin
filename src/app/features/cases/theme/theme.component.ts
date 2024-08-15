import { isPlatformBrowser,CommonModule } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { RedButtonComponent } from '../../../atoms/buttons/red-button/red-button.component';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [CommonModule,RedButtonComponent],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss'
})
export class ThemeComponent {
  @Input() srcTheme=["../../../../../assets/themes/theme2.png"
    

  ]

  isDisplayed:boolean=false;

  currentIndex = 0;

  private intervalId: any;

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }



  ngOnInit(): void {
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
      console.log("je suis passé par là");
      console.log(this.currentIndex);
      console.log(this.srcTheme.length);
    }, 3500); 
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.srcTheme.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.srcTheme.length - 1) ? this.currentIndex + 1 : 0;
  }

  getSlideIndex(relativeIndex: number): number {
    const length = this.srcTheme.length;
    return (this.currentIndex + relativeIndex + length) % length;
  }


}
