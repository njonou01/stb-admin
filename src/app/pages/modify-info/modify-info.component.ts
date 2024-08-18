import { Component } from '@angular/core';
import { TextZoneComponent } from '@/features/text-zone/text-zone.component';
import { RedButtonComponent } from '@/core/atoms/buttons/red-button/red-button.component';
import { ActualityCaroouselComponent } from '@/features/actuality-caroousel/actuality-caroousel.component';
import { WitnessComponent } from '@/features/witness/witness.component';

@Component({
  selector: 'app-modify-info',
  standalone: true,
  imports: [TextZoneComponent,RedButtonComponent,ActualityCaroouselComponent,WitnessComponent],
  templateUrl: './modify-info.component.html',
  styleUrl: './modify-info.component.scss'
})
export class ModifyInfoComponent {
  slides = [
    { srcBack: '../../../assets/images/case-partner/partner-img.png', title: 'Université de Nante', description: 'Description 1' },
    { srcBack: '../../../assets/images/case-partner/partner2-img.png', title: 'Université de Nante', description: 'Description 2' },
    { srcBack: '../../../assets/images/case-partner/partner3-img.png', title: 'Université de Nante', description: 'Description 3' },
    { srcBack: '../../../assets/images/case-partner/partner-img.png', title: 'Université de Nante', description: 'Description 4' },
    { srcBack: '../../../assets/images/case-partner//partner2-img.png', title: 'Titre 4', description: 'Description 4' },
    { srcBack: '../../../assets/images/case-partner/partner3-img.png', title: 'Titre 3', description: 'Description 3' },

    
  ];

}
