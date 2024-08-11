import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="banner-content" >
      <h1>{{text}}</h1>
    </div><
  `,
  styles: `
  :host{
    .banner-content{
      background-color: var(--primary-color) !important;
      position : fixed;
      top: var(--navbar-height);
      height: var(--banner-height);
      width : 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      // padding: 10px;
      color: white;
      text-align: center;
      line-height: 1;
      letter-spacing: 2px;
      z-index : 10;
      h1{
        font-weight: bold;
        text-transform: uppercase;
        font-size: 2rem;
      }
    }

  }
  `,
})
export class BannerComponent implements OnInit {
  ngOnInit(): void {
    console.log('Banner component initialized');
  }
  @Input() text = '';
}
