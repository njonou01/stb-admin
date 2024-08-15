import { Component } from '@angular/core';
import { FormZoneComponent } from '@/core/atoms/form-zone/form-zone.component';
import { RedButtonComponent } from '@/core/atoms/buttons/red-button/red-button.component';

@Component({
  selector: 'app-end-step',
  standalone: true,
  imports: [FormZoneComponent,RedButtonComponent],
  templateUrl: './end-step.component.html',
  styleUrl: './end-step.component.scss'
})
export class EndStepComponent {

}
