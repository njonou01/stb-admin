import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-admin-right-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-right-sidebar.component.html',
  styleUrl: './admin-right-sidebar.component.scss'
})
export class AdminRightSidebarComponent {
  constructor(public sidebarService: SidebarService) {}
}
