import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-circle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-circle.component.html',
  styleUrl: './progress-circle.component.scss'
})
export class ProgressCircleComponent {
  @Input() progress: number = 0;
  @Input() size: number = 150;
  @Input() strokeWidth: number = 15;
  @Input() backgroundColor: string = '#e0e0e0';
  @Input() progressColor: string = '#3f51b5';
  @Input() textColor: string = '#000000';
  @Input() textSize!: number;

  radius: number = 0;
  circumference: number = 0;
  dashoffset: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['progress'] || changes['size'] || changes['strokeWidth']) {
      this.calculateCircle();
    }
  }

  private calculateCircle(): void {
    this.radius = (this.size - this.strokeWidth) / 2;
    this.circumference = this.radius * 2 * Math.PI;
    this.dashoffset = this.circumference * (1 - this.progress / 100);
  }
}
