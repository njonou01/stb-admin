import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { PageBannerNavbarComponent } from "../page-banner-navbar/page-banner-navbar.component";

@Component({
  selector: 'app-admin-main-content',
  standalone: true,
  imports: [CommonModule, PageBannerNavbarComponent],
  templateUrl: './admin-main-content.component.html',
  styleUrl: './admin-main-content.component.scss',

})
export class AdminMainContentComponent {
  constructor(public sidebarService: SidebarService) {}

}
