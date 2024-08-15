import { Component } from '@angular/core';
import { RedButtonComponent} from '../../atoms/buttons/red-button/red-button.component';
import { TextZoneComponent } from '../../molecules/text-zone/text-zone.component';
import { ProfilStateComponent } from '../../atoms/profil-state/profil-state.component';

@Component({
  selector: 'app-commentaire-form',
  standalone: true,
  imports: [RedButtonComponent,TextZoneComponent,ProfilStateComponent],
  templateUrl: './commentaire-form.component.html',
  styleUrl: './commentaire-form.component.scss'
})
export class CommentaireFormComponent {

}
