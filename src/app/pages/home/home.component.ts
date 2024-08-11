import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminRightSidebarComponent } from "@/shared/components/admin-right-sidebar/admin-right-sidebar.component";
import { CommonAssetService } from '@/core/services/common-asset.service';
import { RightSidebarComponent } from "./components/right-sidebar/right-sidebar.component";
import { CarouselOptions } from '@/core/models/carousel-options.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AdminRightSidebarComponent, RightSidebarComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  bannerTitle = 'Accueil';
  CARDS_DATA: Card[] = [
    {
      imageUrl: this.commonService.indexImg1Menu,
      title: 'Universités',
      description: 'A community for VR and novices alike, regular and friendly chat.',
      members: '545,680 Membres'
    },
    {
      imageUrl: this.commonService.indexImg2Menu,
      title: 'Associations',
      description: 'Always a new challenge. Great place to make new friends.',
      members: '845,680 Membres'
    },
    {
      imageUrl: this.commonService.indexImg3Menu,
      title: 'Partenaires',
      description: 'A community for VR and novices alike, regular and friendly chat.',
      members: '545,680 Membres'
    },
    {
      imageUrl: this.commonService.indexImg4Menu,
      title: 'Etudiants',
      description: 'Always a new challenge. Great place to make new friends.',
      members: '445,680 Membres'
    }
  ];
  carouselOptions1: CarouselOptions = {
    itemsPerView: { sm: 1, md: 2, lg: 3, xl: 4 },
    breakpoints: { sm: 576, md: 768, lg: 992, xl: 1200 },
    infiniteScroll: true,
    autoScroll: true,
    autoScrollInterval: 5000,
    showButtons: true,
    showIndicators: true,
    itemSpacing: 20,
    scrollItems: 1
  };
  constructor(public commonService: CommonAssetService) {
  }




}
export interface Card {
  imageUrl: string;
  title: string;
  description: string;
  members: string;
}
