import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banking-transaction-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banking-transaction-payment.component.html',
  styleUrl: './banking-transaction-payment.component.scss'
})
export class BankingTransactionPaymentComponent {
  virements = [
    { amount: 100, recipient: 'FR 364729648362936253648253', date: new Date('2023-12-12') },
    { amount: 100, recipient: 'FR 987654321098765432109876', date: new Date('2023-12-12') },
    { amount: 100, recipient: 'FR 123456789012345678901234', date: new Date('2023-12-12') },
    { amount: 100, recipient: 'FR 567890123456789012345678', date: new Date('2023-12-12') },
  ];
}
