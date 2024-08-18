import { Component } from '@angular/core';
import { BurgubiaSectionComponent } from '@/features/burgubia-section/burgubia-section.component';
import { CarouselCasePartnerComponent } from '@/features/carousel-case-partner/carousel-case-partner.component';

@Component({
  selector: 'app-association',
  standalone: true,
  imports: [BurgubiaSectionComponent,CarouselCasePartnerComponent],
  templateUrl: './association.component.html',
  styleUrl: './association.component.scss'
})
export class AssociationComponent {

  slides = [
    { srcBack: '../../../assets/images/case-partner/partner-img.png', title: 'Université de Nante', description: 'Description 1' },
    { srcBack: '../../../assets/images/case-partner/partner2-img.png', title: 'Université de Nante', description: 'Description 2' },
    { srcBack: '../../../assets/images/case-partner/partner3-img.png', title: 'Université de Nante', description: 'Description 3' },
    { srcBack: '../../../assets/images/case-partner/partner-img.png', title: 'Université de Nante', description: 'Description 4' },
    { srcBack: '../../../assets/images/case-partner//partner2-img.png', title: 'Titre 4', description: 'Description 4' },
    { srcBack: '../../../assets/images/case-partner/partner3-img.png', title: 'Titre 3', description: 'Description 3' },

    
  ];

}
