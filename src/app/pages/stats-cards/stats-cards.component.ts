import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-cards.component.html',
  styleUrl: './stats-cards.component.scss'
})
export class StatsCardsComponent {
  erasmusPercentage = 18;
  eeiCount = 234;
}
