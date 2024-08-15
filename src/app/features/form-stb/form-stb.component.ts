import { Component } from '@angular/core';
import { ProgressebarComponent } from '../progressebar/progressebar.component';
import { RedButtonComponent } from '../../atoms/buttons/red-button/red-button.component';
import { FieldFormComponent } from '../../atoms/field-form/field-form.component';

@Component({
  selector: 'app-form-stb',
  standalone: true,
  imports: [ProgressebarComponent, RedButtonComponent,FieldFormComponent],
  templateUrl: './form-stb.component.html',
  styleUrl: './form-stb.component.scss'
})
export class FormStbComponent {

}
