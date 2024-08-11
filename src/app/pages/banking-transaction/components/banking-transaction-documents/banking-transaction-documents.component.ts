import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banking-transaction-documents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banking-transaction-documents.component.html',
  styleUrl: './banking-transaction-documents.component.scss'
})
export class BankingTransactionDocumentsComponent {
  documents = [
    { name: 'nom du fichier', lastModified: new Date('2023-12-12') },
    { name: 'nom du fichier', lastModified: new Date('2023-12-12') },
    { name: 'nom du fichier', lastModified: new Date('2023-12-12') },
    { name: 'nom du fichier', lastModified: new Date('2023-12-12') },
  ];
}
