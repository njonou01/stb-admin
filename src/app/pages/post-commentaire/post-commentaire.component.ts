import { ProfilStateComponent } from '@/core/atoms/profil-state/profil-state.component';
import { Component } from '@angular/core';
import { TextZoneComponent } from '@/features/text-zone/text-zone.component';
import { RedButtonComponent } from '@/core/atoms/buttons/red-button/red-button.component';
import { CommentaireFormComponent } from '@/features/commentaire-form/commentaire-form.component';


@Component({
  selector: 'app-post-commentaire',
  standalone: true,
  imports: [ProfilStateComponent,TextZoneComponent,RedButtonComponent,CommentaireFormComponent],
  templateUrl: './post-commentaire.component.html',
  styleUrl: './post-commentaire.component.scss'
})
export class PostCommentaireComponent {

}
