import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-candidature',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './candidature.component.html',
  styleUrl: './candidature.component.scss'
})
export class CandidatureComponent {
  personalInfo = {
    nom: 'Kané',
    prenom: 'Mamadou',
    nationalite: 'Sénégalaise',
    paysOrigine: 'Sénégal'
  };

  candidatures = [
    { universite: 'Université de Lyon', diplome: 'Licence 3 en Hydraulique', annee: '2023' },
    { universite: 'Université de Marseille', diplome: 'Licence 3 en Hydraulique', annee: '2022' },
    { universite: 'Université de Paris', diplome: 'Licence 3 en Hydraulique', annee: '2021' },
    { universite: 'Université de Toulouse', diplome: 'Licence 3 en Hydraulique', annee: '2020' }
  ];

  personalDocuments = [
    { icon: 'fas fa-passport', label: 'Passeport' },
    { icon: 'fas fa-camera', label: 'Photo' },
    { icon: 'fas fa-gavel', label: 'Casier judiciaire' },
    { icon: 'fas fa-file-alt', label: 'Autres' }
  ];

  academicDocuments = [
    { icon: 'fas fa-graduation-cap', label: 'Diplome BAC' },
    { icon: 'fas fa-graduation-cap', label: 'Diplome Licence' },
    { icon: 'fas fa-user-graduate', label: 'Diplome Master' },
    { icon: 'fas fa-certificate', label: 'BTS' }
  ];

  onSubmit() {
    console.log('Message envoyé');
  }
}
