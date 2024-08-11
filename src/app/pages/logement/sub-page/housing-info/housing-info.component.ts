import { Housing } from '@/core/models/housing.model';
import { HousingService } from '@/core/services/housing.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ImageCarouselComponent } from "@/shared/components/image-carousel/image-carousel.component";
import { TabNavigationComponent } from "@/shared/components/tab-navigation/tab-navigation.component";
import { InfoTableComponent } from "@/shared/components/info-table/info-table.component";

@Component({
  selector: 'app-housing-info',
  standalone: true,
  imports: [CommonModule, ImageCarouselComponent, InfoTableComponent, TabNavigationComponent],
  templateUrl: './housing-info.component.html',
  styleUrl: './housing-info.component.scss'
})
export class HousingInfoComponent implements OnInit {
  housing!: Housing;
  summary!: {address : string , type : string , monthlyFee : number};
  activeTab: 'insurance' | 'deposit' | 'documents' = 'insurance';

  constructor(private housingService: HousingService) {}

  ngOnInit(): void {
    this.housing = this.housingService.getHousingInfo();
    this.summary = {
      address: this.housing.address,
      type: this.housing.type,
      monthlyFee: this.housing.monthlyFee
    };
  }

  setActiveTab(tab: 'insurance' | 'deposit' | 'documents'): void {
    this.activeTab = tab;
  }

  getColumns(tab: string): {key: string, label: string}[] {
    switch(tab) {
      case 'insurance':
      case 'deposit':
        return [
          {key: 'date', label: 'Date'},
          {key: 'duration', label: 'Durée de validité'},
          {key: 'amount', label: 'Montant'},
          {key: 'status', label: 'Statu'}
        ];
      case 'documents':
        return [
          {key: 'date', label: 'Date'},
          {key: 'duration', label: 'Durée de validité'},
          {key: 'type', label: 'Nature'}
        ];
      default:
        return [];
    }
  }
}
