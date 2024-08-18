import { Component } from '@angular/core';
import { ToggleBtnComponent } from '@/core/atoms/toggle-btn/toggle-btn.component';

@Component({
  selector: 'app-option-bloc',
  standalone: true,
  imports: [ToggleBtnComponent  ],
  templateUrl: './option-bloc.component.html',
  styleUrl: './option-bloc.component.scss'
})
export class OptionBlocComponent {

}
