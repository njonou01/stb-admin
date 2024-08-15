import { Component, Input } from '@angular/core';
import { RedButtonComponent } from '../../atoms/buttons/red-button/red-button.component';
import { ProfilStateComponent } from '../../atoms/profil-state/profil-state.component';
import { StarRateComponent } from '../../atoms/star-rate/star-rate.component';


@Component({
  selector: 'app-witness',
  standalone: true,
  imports: [RedButtonComponent,ProfilStateComponent,StarRateComponent],
  templateUrl: './witness.component.html',
  styleUrl: './witness.component.scss'
})
export class WitnessComponent {
  @Input() rate:any=4.5;

}
