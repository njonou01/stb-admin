import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-banking-transaction',
  standalone: true,
  imports: [CommonModule , RouterOutlet,],
  templateUrl: './banking-transaction.component.html',
  styleUrl: './banking-transaction.component.scss'
})
export class BankingTransactionComponent {

}
