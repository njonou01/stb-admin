import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';
import { ItemMenuSidebarComponent } from "../item-menu-sidebar/item-menu-sidebar.component";
import { SidebarItems } from '@/core/models/sidebar-items';

@Component({
  selector: 'app-admin-left-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, ItemMenuSidebarComponent],
  templateUrl: './admin-left-sidebar.component.html',
  styleUrl: './admin-left-sidebar.component.scss',
})
export class AdminLeftSidebarComponent {
  navItems: SidebarItems[] = [];
  constructor(public sidebarService: SidebarService) {
    this.navItems = this.sidebarService.navItems;
  }
}
