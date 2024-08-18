import { RedButtonComponent } from '@/core/atoms/buttons/red-button/red-button.component';
import { Component } from '@angular/core';
import { PresentationComponent } from '@/features/cases/presentation/presentation.component';
import { ProfilInfoComponent } from '@/features/profil-info/profil-info.component';



@Component({
  selector: 'app-lyon-association3',
  standalone: true,
  imports: [RedButtonComponent,PresentationComponent,ProfilInfoComponent],
  templateUrl: './lyon-association3.component.html',
  styleUrl: './lyon-association3.component.scss'
})
export class LyonAssociation3Component {

}
