import { Component, Input } from '@angular/core';
import { PostActualityComponent } from '../post-actuality/post-actuality.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-zone-post-actuality',
  standalone: true,
  imports: [PostActualityComponent,CommonModule],
  templateUrl: './zone-post-actuality.component.html',
  styleUrl: './zone-post-actuality.component.scss'
})
export class ZonePostActualityComponent {
  @Input() posts?:any;
  @Input() title?:any;
  

}
