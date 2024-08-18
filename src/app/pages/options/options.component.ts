import { Component } from '@angular/core';
import { OptionBlocComponent } from '@/features/option-bloc/option-bloc.component';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [OptionBlocComponent],
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss'
})
export class OptionsComponent {

}
