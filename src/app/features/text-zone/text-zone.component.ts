import { Component, Input } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-text-zone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-zone.component.html',
  styleUrl: './text-zone.component.scss'
})
export class TextZoneComponent {
@Input() content?:string;
@Input() radius:boolean=true;

}
