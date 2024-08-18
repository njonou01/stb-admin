import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profil-info',
  standalone: true,
  imports: [],
  templateUrl: './profil-info.component.html',
  styleUrl: './profil-info.component.scss'
})
export class ProfilInfoComponent {
  @Input() name:string="Adrien";
  @Input() srcPP:string="../../../assets/images/profil-img.png";
  @Input() content:string="Lorem ipsum dolor sit amet. Quo nobis esse sed ratione incidunt sed nihil vitae";

}
