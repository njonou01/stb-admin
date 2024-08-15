import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-zone',
  standalone: true,
  imports: [],
  templateUrl: './form-zone.component.html',
  styleUrl: './form-zone.component.scss'
})
export class FormZoneComponent {
  @Input() content?:string;
  @Input() srcIcon:string="../../../../assets/images/field-form/profil-red.png"

}
