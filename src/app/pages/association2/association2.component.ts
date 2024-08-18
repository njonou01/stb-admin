import { Component } from '@angular/core';
import { ActulitySectionComponent } from '@/features/actulity-section/actulity-section.component';
import { DescriptionSectionComponent } from '@/features/description-section/description-section.component';
import { CommentsSectionComponent } from '@/features/comments-section/comments-section.component';


@Component({
  selector: 'app-association2',
  standalone: true,
  imports: [ActulitySectionComponent,DescriptionSectionComponent,CommentsSectionComponent],
  templateUrl: './association2.component.html',
  styleUrl: './association2.component.scss'
})
export class Association2Component {
  slides = [
    { srcBack: '../../../assets/images/case-partner/partner-img.png', title: 'Université de Nante', description: 'Description 1' },
    { srcBack: '../../../assets/images/case-partner/partner2-img.png', title: 'Université de Nante', description: 'Description 2' },
    { srcBack: '../../../assets/images/case-partner/partner3-img.png', title: 'Université de Nante', description: 'Description 3' },
    { srcBack: '../../../assets/images/case-partner/partner-img.png', title: 'Université de Nante', description: 'Description 4' },
    { srcBack: '../../../assets/images/case-partner//partner2-img.png', title: 'Titre 4', description: 'Description 4' },
    { srcBack: '../../../assets/images/case-partner/partner3-img.png', title: 'Titre 3', description: 'Description 3' },

    
  ];

  comments=[
    {UrlProfilImage : '../../../assets/images/profil-comments.png', Comment: ' Un commentaire ', connectedState: true},
    {UrlProfilImage : '../../../assets/images/profil-comments.png', Comment: ' Un commentaire 1 ', connectedState: false},
    {UrlProfilImage : '../../../assets/images/profil-comments.png', Comment: ' Un commentaire  2', connectedState: true},
    {UrlProfilImage : '../../../assets/images/profil-comments.png', Comment: ' Un commentaire  3', connectedState: true},
    {UrlProfilImage : '../../../assets/images/profil-comments.png', Comment: ' Un commentaire  4', connectedState: true},
    {UrlProfilImage : '../../../assets/images/profil-comments.png', Comment: ' Un commentaire  5', connectedState: false,},
    {UrlProfilImage : '../../../assets/images/profil-comments.png', Comment: ' Un commentaire  6', connectedState: true},
    {UrlProfilImage : '../../../assets/images/profil-comments.png', Comment: ' Un commentaire  7', connectedState: true},
    {UrlProfilImage : '../../../assets/images/profil-comments.png', Comment: ' Un commentaire 8', connectedState: false},
    {UrlProfilImage : '../../../assets/images/profil-comments.png', Comment: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. ', connectedState: false},
    {UrlProfilImage : '../../../assets/images/profil-comments.png', Comment: ' Un commentaire 10', connectedState: true},
  ];


}
