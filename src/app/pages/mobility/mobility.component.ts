import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MobilityChartComponent } from "../mobility-chart/mobility-chart.component";
import { StatsCardsComponent } from "../stats-cards/stats-cards.component";
import { CandidatesListComponent } from "../candidates-list/candidates-list.component";
import { PartnersUniversitiesComponent } from "../partners-universities/partners-universities.component";
import { CarouselComponent } from "../../shared/components/carousel/carousel.component";
import { CarouselItemComponent } from "../../shared/components/carousel-item/carousel-item.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobility',
  standalone: true,
  imports: [CommonModule,RouterLink,  MobilityChartComponent, StatsCardsComponent, CandidatesListComponent, PartnersUniversitiesComponent, CarouselComponent, CarouselItemComponent],
  templateUrl: './mobility.component.html',
  styleUrl: './mobility.component.scss'
})
export class MobilityComponent {
  items = [
    { id: 1, title: 'Item 1', content: 'Content 1' },
    { id: 2, title: 'Item 2', content: 'Content 2' },
    { id: 3, title: 'Item 3', content: 'Content 3' },
    { id: 4, title: 'Item 4', content: 'Content 4' },
    { id: 5, title: 'Item 5', content: 'Content 5' },
    { id: 6, title: 'Item 6', content: 'Content 6' },
    { id: 7, title: 'Item 7', content: 'Content 7' },
    { id: 8, title: 'Item 8', content: 'Content 8' },
  ];

  currentIndex = 0;
  visibleItemsCount = 1;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    this.updateVisibleItemsCount();
  }

  updateVisibleItemsCount(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth >= 992) {
        this.visibleItemsCount = 5;
      } else if (window.innerWidth >= 768) {
        this.visibleItemsCount = 3;
      } else {
        this.visibleItemsCount = 1;
      }
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  getVisibleItems(): any[] {
    return [...this.items.slice(this.currentIndex), ...this.items.slice(0, this.currentIndex)]
      .slice(0, this.visibleItemsCount);
  }
}
