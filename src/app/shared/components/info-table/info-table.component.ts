import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-table.component.html',
  styleUrl: './info-table.component.scss'
})
export class InfoTableComponent {
  @Input() data: any[] = [];
  @Input() columns: {key: string, label: string}[] = [];
}
