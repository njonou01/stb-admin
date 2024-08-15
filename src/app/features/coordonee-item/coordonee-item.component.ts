import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coordonee-item',
  standalone: true,
  imports: [],
  templateUrl: './coordonee-item.component.html',
  styleUrl: './coordonee-item.component.scss'
})
export class CoordoneeItemComponent {
  @Input() srcIcon?:string;
  @Input() content?:string;

}
