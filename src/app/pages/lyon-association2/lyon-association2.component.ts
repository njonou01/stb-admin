import { Component } from '@angular/core';
import { RedButtonComponent } from '@/core/atoms/buttons/red-button/red-button.component';
import { PresentationComponent } from '@/features/cases/presentation/presentation.component';

@Component({
  selector: 'app-lyon-association2',
  standalone: true,
  imports: [RedButtonComponent,PresentationComponent],
  templateUrl: './lyon-association2.component.html',
  styleUrl: './lyon-association2.component.scss'
})
export class LyonAssociation2Component {

}
