import { Component } from '@angular/core';
import { TextZoneComponent } from '@/features/text-zone/text-zone.component';
import { RedButtonComponent } from '@/core/atoms/buttons/red-button/red-button.component';
import { SwitchWindowComponent } from '@/features/switch-window/switch-window.component';

@Component({
  selector: 'app-lyon-association',
  standalone: true,
  imports: [TextZoneComponent, RedButtonComponent,SwitchWindowComponent],
  templateUrl: './lyon-association.component.html',
  styleUrl: './lyon-association.component.scss'
})
export class LyonAssociationComponent {
  themes=[
    ["../../../../../assets/images/images/themes/theme1.png"],
    ["../../../assets/images/themes/theme2.png","../../../assets/images/themes/theme2.png","../../../assets/images/themes/theme3.png","../../../assets/images/themes/theme4.png"],
    ["../../../assets/images/themes/theme3.png"],
    ["../../../assets/images/themes/theme2.png"],
    ["../../../assets/images/themes/theme1.png"],
    ["../../../assets/images/themes/theme2.png"],
    ["../../../assets/images/themes/theme3.png"],
    ["../../../assets/images/themes/theme4.png"],
    ["../../../assets/images/themes/theme1.png","../../../assets/images/themes/theme2.png","../../../assets/images/themes/theme3.png"],
    ["../../../assets/images/themes/theme1.png"],
    ["../../../assets/images/themes/theme1.png"],
    ["../../../assets/images/themes/theme1.png","../../../assets/images/themes/theme2.png","../../../assets/images/themes/theme3.png"],
    ["../../../assets/images/themes/theme1.png"],
    ["../../../assets/images/themes/theme1.png"],
    ["../../../assets/images/themes/theme1.png"],
    ["../../../assets/images/themes/theme1.png"],
    ["../../../assets/images/themes/theme1.png"],
    ["../../../assets/images/themes/theme1.png"],
    ["../../../assets/images/themes/theme1.png","../../../assets/images/themes/theme2.png","../../../assets/images/themes/theme3.png","../../../assets/images/themes/theme4.png"],
    ["../../../assets/images/themes/theme1.png","../../../assets/images/themes/theme2.png","../../../assets/images/themes/theme3.png","../../../assets/images/themes/theme4.png"],
    ["../../../assets/images/themes/theme1.png"],
    ["../../../assets/images/themes/theme1.png"],
    ["../../../assets/images/themes/theme1.png"],
    ["../../../assets/images/themes/theme1.png"],
    ["../../../assets/images/themes/theme1.png"],
    ["../../../assets/images/themes/theme1.png"],
    ["../../../assets/images/themes/theme1.png"],
    ["../../../assets/images/themes/theme1.png","../../../assets/images/themes/theme2.png","../../../assets/images/themes/theme3.png"],
    ["../../../assets/images/themes/theme1.png","../../../assets/images/themes/theme2.png","../../../assets/images/themes/theme3.png"],
    ["../../../assets/images/themes/theme1.png","../../../assets/images/themes/theme2.png","../../../assets/images/themes/theme3.png"],
    ["../../../assets/images/themes/theme1.png","../../../assets/images/themes/theme2.png","../../../assets/images/themes/theme3.png"],
    ["../../../assets/images/themes/theme1.png"],
    ["../../../assets/images/themes/theme1.png"],
    ["../../../assets/images/themes/theme1.png"],
    ["../../../assets/images/themes/theme1.png"],
    ["../../../assets/images/themes/theme1.png"],




  ]

}
