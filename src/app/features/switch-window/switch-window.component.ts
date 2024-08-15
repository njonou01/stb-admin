import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from '../cases/theme/theme.component';

@Component({
  selector: 'app-switch-window',
  standalone: true,
  imports: [CommonModule,ThemeComponent],
  templateUrl: './switch-window.component.html',
  styleUrl: './switch-window.component.scss'
})
export class SwitchWindowComponent {
  @Input() themes?:any;

  colorItem: string[] = [];

  constructor() {
    this.generateRandomColors(500); 
  }

  generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  generateRandomColors(num: number) {
    for (let i = 0; i < num; i++) {
      this.colorItem.push(this.generateRandomColor());
    }
  }

  selectedView: string = 'view1';

  selectView(view: string) {
    this.selectedView = view;
  }

}
