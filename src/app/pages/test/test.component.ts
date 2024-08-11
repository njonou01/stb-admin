import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

export interface PhotosApi {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, CarouselModule,],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'] // Correction ici
})
export class TestComponent {
  items = [
    { imageUrl: 'assets/images/housing/IMG Loyer.png', title: 'Item 1' },
    { imageUrl: 'assets/images/mobility/image1.png', title: 'Item 2' },
    { imageUrl: 'assets/images/mobility/image2.png', title: 'Item 3' },
    { imageUrl: 'assets/images/mobility/image3.png', title: 'Item 4' },
    { imageUrl: 'assets/images/housing/IMG Loyer.png', title: 'Item 1' },
    { imageUrl: 'assets/images/mobility/image1.png', title: 'Item 2' },
    { imageUrl: 'assets/images/mobility/image2.png', title: 'Item 3' },
    { imageUrl: 'assets/images/mobility/image3.png', title: 'Item 4' },    { imageUrl: 'assets/images/housing/IMG Loyer.png', title: 'Item 1' },
    { imageUrl: 'assets/images/mobility/image1.png', title: 'Item 2' },
    { imageUrl: 'assets/images/mobility/image2.png', title: 'Item 3' },
    { imageUrl: 'assets/images/mobility/image3.png', title: 'Item 4' },
    // Add more items as needed
  ];

  customOptions = {
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<', '>'],  // Optional: Customize navigation buttons
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    autoplay: true,  // Optional: Enable auto-play
    autoplayTimeout: 3000,  // Optional: Set auto-play timeout
    autoplayHoverPause: true,  // Optional: Pause auto-play on hover
  };
  }

