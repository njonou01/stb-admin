import { CommonAssetService } from '@/core/services/common-asset.service';
import { Component } from '@angular/core';
import { ProgressCircleComponent } from "@/shared/components/progress-circle/progress-circle.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, ProgressCircleComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  constructor(public commonAssetService: CommonAssetService) {}

}
