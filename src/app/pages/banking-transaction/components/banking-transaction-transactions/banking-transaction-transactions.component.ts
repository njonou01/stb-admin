import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banking-transaction-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banking-transaction-transactions.component.html',
  styleUrl: './banking-transaction-transactions.component.scss'
})
export class BankingTransactionTransactionsComponent {
  transactions = [
    { type: 'Retrait', amount: -100, date: new Date('2023-12-12') },
    { type: 'Dépôt', amount: 100, date: new Date('2023-12-12') },
    { type: 'Retrait', amount: -100, date: new Date('2023-12-12') },
    { type: 'Dépôt', amount: 100, date: new Date('2023-12-12') },
  ];
}
