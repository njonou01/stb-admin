import { Injectable } from '@angular/core';
import { Housing } from '../models/housing.model';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  getHousingInfo(): Housing {
    return {
      tenantName: 'Mamadou Kané',
      images: ['assets/images/housing/Rectangle 435.png', 'assets/images/housing/pdf-icon.png', 'assets/images/housing/logo.png'],
      address: '123 Main St',
      type: 'Apartment',
      monthlyFee: 500,
      insurance: [
        { date: new Date('2023-12-12'), duration: '12 Mois', amount: 100, status: 'Payé' },
        { date: new Date('2024-01-12'), duration: '12 Mois', amount: 100, status: 'Non payé' }
      ],
      deposit: [
        { date: new Date('2023-12-12'), duration: '2 Mois', amount: 100, status: 'Payé' },
        { date: new Date('2024-01-12'), duration: '3 Mois', amount: 100, status: 'Non payé' }
      ],
      documents: [
        { date: new Date('2023-12-12'), duration: '2 ans', type: 'Contrat de bail' },
        { date: new Date('2024-01-12'), duration: '3 ans', type: 'Contrat de bail' }
      ],
      notice: {
        date: new Date('2024-04-15'),
        delay: '1 Mois'
      }
    };
  }
}
