import { Component, OnInit } from '@angular/core';
import { AdminLeftSidebarComponent } from "@/shared/components/admin-left-sidebar/admin-left-sidebar.component";
import { AdminRightSidebarComponent } from "@/shared/components/admin-right-sidebar/admin-right-sidebar.component";
import { ActivatedRoute } from '@angular/router';
import { PageBannerNavbarComponent } from "../../shared/components/page-banner-navbar/page-banner-navbar.component";
import { CommonAssetService } from '@/core/services/common-asset.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AdminLeftSidebarComponent, AdminRightSidebarComponent, PageBannerNavbarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  bannerText !: string;
  constructor(private route: ActivatedRoute , public commonService: CommonAssetService) {

  }
  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.bannerText = data['title'];
      console.log(this.bannerText);
    });
  }
}
