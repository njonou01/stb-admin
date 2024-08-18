import { Component } from '@angular/core';
import { ZonePostActualityComponent } from '@/features/zone-post-actuality/zone-post-actuality.component';
import { ActualityCaroouselComponent } from '@/features/actuality-caroousel/actuality-caroousel.component';

@Component({
  selector: 'app-post-actualite',
  standalone: true,
  imports: [ZonePostActualityComponent,ActualityCaroouselComponent],
  templateUrl: './post-actualite.component.html',
  styleUrl: './post-actualite.component.scss'
})
export class PostActualiteComponent {

  slides = [
    { srcBack: '../../../assets/images/case-partner/partner-img.png', title: 'Université de Nante', description: 'Description 1' },
    { srcBack: '../../../assets/images/case-partner/partner2-img.png', title: 'Université de Nante', description: 'Description 2' },
    { srcBack: '../../../assets/images/case-partner/partner3-img.png', title: 'Université de Nante', description: 'Description 3' },
    { srcBack: '../../../assets/images/case-partner/partner-img.png', title: 'Université de Nante', description: 'Description 4' },
    { srcBack: '../../../assets/images/case-partner//partner2-img.png', title: 'Titre 4', description: 'Description 4' },
    { srcBack: '../../../assets/images/case-partner/partner3-img.png', title: 'Titre 3', description: 'Description 3' },

    
  ];


  posts =[
    {
    src:"../../../assets/images/case-partner/partner-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    {
    src:"../../../assets/images/case-partner/partner2-img.png",
    namee: "Adrien",
    content: "Lorem bis esse sed ratione incidunt sed ratione....",
    date:"2/05/2022"

  },
    
  
    
  ]

}
