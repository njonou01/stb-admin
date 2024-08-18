import { Component, Input } from '@angular/core';
import { RedButtonComponent } from '@/core/atoms/buttons/red-button/red-button.component';
import { ProfilStateComponent } from '@/core/atoms/profil-state/profil-state.component';
import { StarRateComponent } from '@/core/atoms/star-rate/star-rate.component';


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
