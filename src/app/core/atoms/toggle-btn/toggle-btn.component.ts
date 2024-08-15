import { Component } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-toggle-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-btn.component.html',
  styleUrl: './toggle-btn.component.scss'
})
export class ToggleBtnComponent {

  isToggled: boolean = false;

  toggle() {
    this.isToggled = !this.isToggled;
  }

}
