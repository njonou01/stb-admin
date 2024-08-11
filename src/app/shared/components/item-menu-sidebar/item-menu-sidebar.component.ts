import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { routes } from '../../../app.routes';
import { SidebarItems } from '@/core/models/sidebar-items';

@Component({
  selector: 'app-item-menu-sidebar',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './item-menu-sidebar.component.html',
  styleUrl: './item-menu-sidebar.component.scss'
})
export class ItemMenuSidebarComponent {
  @Input() title: string = 'Banque';
  @Input() items!: SidebarItems[];
  isCollapsed: boolean = false;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
