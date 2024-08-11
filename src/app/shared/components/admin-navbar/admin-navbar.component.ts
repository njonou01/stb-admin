import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from '@/shared/services/sidebar.service';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.scss',

})
export class AdminNavbarComponent {
  constructor(public sidebarService: SidebarService) {}
  navItems = [
    { label: 'Accueil', icon: 'fas fa-home', route: '/home' },
    { label: 'Les documents', icon: 'fas fa-file-alt', route: '/documents' },
    { label: 'Agenda', icon: 'fas fa-calendar-alt', route: '/agenda' },
    { label: 'Membres', icon: 'fas fa-users', route: '/members' },
    { label: 'Messages', icon: 'fas fa-envelope', route: '/messages', badge: 13 },
    { label: 'Banque', icon: 'fas fa-piggy-bank', route: '/bank' },
    { label: 'Logement', icon: 'fas fa-home', route: '/housing' },
    { label: 'Mobilité', icon: 'fas fa-globe', route: '/mobility' }
  ];
}
