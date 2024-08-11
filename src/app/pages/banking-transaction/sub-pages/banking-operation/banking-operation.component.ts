import { SidebarService } from '@/shared/services/sidebar.service';
import { Component } from '@angular/core';
import { BankingTransactionTransactionsComponent } from "../../components/banking-transaction-transactions/banking-transaction-transactions.component";
import { BankingTransactionPaymentComponent } from "../../components/banking-transaction-payment/banking-transaction-payment.component";
import { BankingTransactionDocumentsComponent } from "../../components/banking-transaction-documents/banking-transaction-documents.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banking-operation',
  standalone: true,
  imports: [CommonModule,BankingTransactionTransactionsComponent, BankingTransactionPaymentComponent, BankingTransactionDocumentsComponent],
  templateUrl: './banking-operation.component.html',
  styleUrl: './banking-operation.component.scss'
})
export class BankingOperationComponent {
  activeTab = 'transactions';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  constructor(private sidebarService : SidebarService) {
    this.sidebarService.hideRightSidebar();
  }
}
