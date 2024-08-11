import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-banking-cagnotes',
  templateUrl: './banking-cagnotes.component.html',
  styleUrls: ['./banking-cagnotes.component.scss'],
  standalone : true ,
  imports: [CommonModule]
})
export class BankingCagnotesComponent implements OnInit {
  @ViewChild('studentChart') studentChart!: ElementRef;
  chart: any;

  cagnoteAmount = 18;
  totalParticipants = 234;
  malePercentage = 35;
  femalePercentage = 65;
  cagnoteType = 'Vacance';
  isPrivate = true;
  participants = [
    {id: 1 , name: 'Roland', image: 'assets/images/authors/roland.png' , status: 'Validé'},
    {id: 2, name: 'Xavier', image: 'assets/images/authors/xavier.png' , status: 'Non validé'},
    {id: 3, name: 'Nathalie', image: 'assets/images/authors/nathalie.png' , status: 'Non validé'},
    {id: 4, name: 'Adrien', image: 'assets/images/authors/adrien.png' , status: 'Validé'},
    {id: 5, name: 'Poline', image: 'assets/images/authors/poline.png', status: 'Validé'},
    {id: 6, name: 'Mignon', image: 'assets/images/authors/mignon.png', status: 'Non validé'},
    {id: 7, name: 'Paul', image: 'assets/images/authors/paul.png', status: 'Validé'}
  ];
  totalCagnotes = 730;
  totalStudentCagnotes = 400;
  totalMaleStudentCagnotes = 130;
  eventsPercentage = 40;
  outingsPercentage = 60;
  authors = [
    {id: 1, name: 'Roland', image: 'assets/images/authors/roland.png'},
    {id: 2, name: 'Xavier', image: 'assets/images/authors/xavier.png'},
    {id: 3, name: 'Nathalie', image: 'assets/images/authors/nathalie.png'},
    {id: 4, name: 'Adrien', image: 'assets/images/authors/adrien.png'},
    {id: 5, name: 'Poline', image: 'assets/images/authors/poline.png'},
    {id: 6, name: 'Mignon', image: 'assets/images/authors/mignon.png'},
    {id: 7, name: 'Paul', image: 'assets/images/authors/paul.png'}
  ];

  constructor() { }

  ngOnInit(): void { }

}
