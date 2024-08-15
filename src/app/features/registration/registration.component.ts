import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedButtonComponent } from '@/core/atoms/buttons/red-button/red-button.component';
import { FieldFormComponent } from '@/core/atoms/field-form/field-form.component';
import { ProgressebarComponent } from '../progressebar/progressebar.component';
import { EndStepComponent } from './end-step/end-step.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,RedButtonComponent,FieldFormComponent,ProgressebarComponent,EndStepComponent],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  currentStep: number = 0; 
  totalSteps = 4; 

  nextStep() {
    if (this.currentStep < this.totalSteps - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

}