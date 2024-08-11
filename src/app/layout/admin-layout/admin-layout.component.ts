import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet, ActivatedRoute } from '@angular/router';
import { AdminNavbarComponent } from '@/shared/components/admin-navbar/admin-navbar.component';
import { AdminLeftSidebarComponent } from '@/shared/components/admin-left-sidebar/admin-left-sidebar.component';
import { AdminRightSidebarComponent } from '@/shared/components/admin-right-sidebar/admin-right-sidebar.component';
import { AdminMainContentComponent } from '@/shared/components/admin-main-content/admin-main-content.component';
import { BannerComponent } from '@/shared/components/banner/banner.component';
import { PageBannerNavbarComponent } from "@/shared/components/page-banner-navbar/page-banner-navbar.component";
import { filter } from 'rxjs';
@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AdminNavbarComponent, AdminLeftSidebarComponent, AdminRightSidebarComponent, AdminMainContentComponent, BannerComponent, PageBannerNavbarComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent {
  isRightSidebarShow!: boolean;
  bannerTitle!: string;
  hasRightSidebar!: boolean;

  constructor(private router: Router, private ActivatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.getBannerTitle();
    });

    this.getBannerTitle();
  }

  private getBannerTitle(): void {
    let route = this.ActivatedRoute.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    route.data.subscribe(data => {
      this.bannerTitle = data['bannerTitle'];
      this.hasRightSidebar = data['hasRightSidebar'] || false;
    });
  }
}
