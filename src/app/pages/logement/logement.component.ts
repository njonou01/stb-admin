import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProgressCircleComponent } from "@/shared/components/progress-circle/progress-circle.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logement',
  standalone: true,
  imports: [CommonModule, ProgressCircleComponent , RouterLink],
  templateUrl: './logement.component.html',
  styleUrl: './logement.component.scss'
})
export class LogementComponent {
  etudiants = [
    { nom: 'Anita', garant: 'Jean', etablissement: 'Université de Lyon', adresse: 'FR 3847586969607600050559B', type: 'Égyptien' },
    { nom: 'OKO', garant: 'Jean', etablissement: 'Université de Lyon', adresse: 'FR 3847586969607600050559B', type: 'Égyptien' },
    { nom: 'ITOUA', garant: 'Jean', etablissement: 'Université de Lyon', adresse: 'FR 3847586969607600050559B', type: 'Égyptien' },
    { nom: 'ANOUA', garant: 'Jean', etablissement: 'Université de Lyon', adresse: 'FR 3847586969607600050559B', type: 'Égyptien' },
    { nom: 'VALENTIN', garant: 'Jean', etablissement: 'Université de Lyon', adresse: 'FR 3847586969607600050559B', type: 'Égyptien' },
  ];

  statsCards = [
    {
      type: 'loues',
      info: ['70% collocation | 17% privé', '35% public | 45% Studio'],
      number: 1234,
      label: 'Logements en loués',
      progress: 75,
      percentage: '25%',
      progressColor: '#0D17F1',
      statusLabel: 'Payé'
    },
    {
      type: 'attente',
      info: ['70% collocation | 15% privé', '30% public | 40% Studio'],
      number: 234,
      label: 'Logements en attente',
      progress: 10,
      percentage: '10%',
      progressColor: '#FD7B03',
      statusLabel: 'Impayé'
    }
  ];

  appartements = [
    {
      class: 'available-section',
      title: 'Appartements à louer',
      images: [
        'assets/images/housing/IMG Loyer.png',
        'assets/images/housing/IMG Loyer (1).png',
        'assets/images/housing/IMG Loyer (2).png'
      ]
    },
    {
      class: 'occupied-section',
      title: 'Appartements occupés',
      images: [
        'assets/images/housing/IMG Occupé (1).png',
        'assets/images/housing/IMG Occupé (2).png',
        'assets/images/housing/IMG Occupé (3).png'
      ]
    }
  ];
}
