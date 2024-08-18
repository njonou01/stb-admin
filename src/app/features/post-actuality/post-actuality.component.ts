import { Component, Input } from '@angular/core';
import { RedButtonComponent } from '@/core/atoms/buttons/red-button/red-button.component';
@Component({
  selector: 'app-post-actuality',
  standalone: true,
  imports: [RedButtonComponent],
  templateUrl: './post-actuality.component.html',
  styleUrl: './post-actuality.component.scss'
})
export class PostActualityComponent {
  @Input() src?:any="../../../../assets/case-partner/partner-img.png";
  @Input() name?:any="Adrien";
  @Input() content?:any="Lorem bis esse sed ratione incidunt sed ratione....";
  @Input() date?:any="2/05/2022";

}
