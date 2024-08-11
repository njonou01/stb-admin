import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SidebarItems } from '@/core/models/sidebar-items';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private leftSidebarCollapsed = new BehaviorSubject<boolean>(false);
  private rightSidebarCollapsed = new BehaviorSubject<boolean>(true);
  private mobileLeftSidebarVisible = new BehaviorSubject<boolean>(false);
  private mobileRightSidebarVisible = new BehaviorSubject<boolean>(false);

  leftSidebarCollapsed$ = this.leftSidebarCollapsed.asObservable();
  rightSidebarCollapsed$ = this.rightSidebarCollapsed.asObservable();
  mobileLeftSidebarVisible$ = this.mobileLeftSidebarVisible.asObservable();
  mobileRightSidebarVisible$ = this.mobileRightSidebarVisible.asObservable();

  toggleLeftSidebar() {
    this.leftSidebarCollapsed.next(!this.leftSidebarCollapsed.value);
  }

  toggleRightSidebar() {
    this.rightSidebarCollapsed.next(!this.rightSidebarCollapsed.value);
  }

  hideRightSidebar() {
    this.rightSidebarCollapsed.next(true);
  }

  showRightSidebar() {
    this.rightSidebarCollapsed.next(false);
  }

  toggleMobileLeftSidebar() {
    this.mobileLeftSidebarVisible.next(!this.mobileLeftSidebarVisible.value);
  }
  toggleMobileRightSidebar() {
    this.mobileRightSidebarVisible.next(!this.mobileRightSidebarVisible.value);
  }
  navItems : SidebarItems[] = [
    { label: 'Accueil', icon: 'fas fa-home', route: '/admin/home' },
    { label: 'Les documents', icon: 'fas fa-file-alt', route: '/admin/documents' },
    { label: 'Agenda', icon: 'fas fa-calendar-alt', route: '/admin/agenda' },
    { label: 'Membres', icon: 'fas fa-users', route: '/admin/members' },
    { label: 'Messages', icon: 'fas fa-envelope', route: '/admin/messages', badge: 13 },
    {
      label: 'Banque',
      icon: 'fas fa-piggy-bank',
      route: '/admin/banking',
      subItems: [
        { label: 'Opérations', icon: 'fas fa-sync-alt', route: '/admin/banking/operations' },
        { label: 'Dépannage', icon: 'fas fa-cloud', route: '/admin/banking/depanage' },
        { label: 'Cagnottes', icon: 'fas fa-dice', route: '/admin/banking/cagnottes' }
      ]
    },
    { label: 'Logement', icon: 'fas fa-home', route: 'logement' },
    { label: 'Mobilité', icon: 'fas fa-globe', route: '/admin/mobility' }
  ];
}
