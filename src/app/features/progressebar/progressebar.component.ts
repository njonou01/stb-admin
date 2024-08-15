import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progressebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progressebar.component.html',
  styleUrl: './progressebar.component.scss'
})
export class ProgressebarComponent {
  @Input() steps = [1, 2, 3, 4, 5]; 
  @Input() currentStep: number = 0;
  @Input() btn:boolean=false;
  
  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

}
