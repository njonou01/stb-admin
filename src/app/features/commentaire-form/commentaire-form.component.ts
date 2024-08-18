import { Component } from '@angular/core';
import { RedButtonComponent } from '@/core/atoms/buttons/red-button/red-button.component';
import { TextZoneComponent } from '../text-zone/text-zone.component';
import { ProfilStateComponent } from '@/core/atoms/profil-state/profil-state.component';

@Component({
  selector: 'app-commentaire-form',
  standalone: true,
  imports: [RedButtonComponent,TextZoneComponent,ProfilStateComponent],
  templateUrl: './commentaire-form.component.html',
  styleUrl: './commentaire-form.component.scss'
})
export class CommentaireFormComponent {

}
