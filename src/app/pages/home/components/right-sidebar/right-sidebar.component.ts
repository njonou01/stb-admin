import { CommonAssetService } from '@/core/services/common-asset.service';
import { Component } from '@angular/core';
import { AdminRightSidebarComponent } from "../../../../shared/components/admin-right-sidebar/admin-right-sidebar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [CommonModule,AdminRightSidebarComponent],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.scss'
})
export class RightSidebarComponent {
  constructor(public commonService: CommonAssetService) {}
}
