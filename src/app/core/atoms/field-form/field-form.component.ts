import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-form',
  standalone: true,
  imports: [],
  templateUrl: './field-form.component.html',
  styleUrl: './field-form.component.scss'
})
export class FieldFormComponent {
  @Input() content?:string;
  @Input() srcIcon:string="../../../../assets/images/field-form/profil-red.png"

}
