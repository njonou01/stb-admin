import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-banking-depanage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banking-depanage.component.html',
  styleUrl: './banking-depanage.component.scss'
})
export class BankingDepanageComponent {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  studentName = 'Ibrahima DRAME';
  studentId = 'N°0000000001';
  university = 'Université de Lyon';
  balance = 1123.85;

  totalHelps = 12;
  totalHelpAmount = 89200;

  helpList = [
    { name: 'Adrien OBA', rib: 'FR 3847586969607600050599B', amount: 100, date: new Date('2023-12-12') },
    { name: 'Anaelle OBA', rib: 'FR 3847586969607600050599B', amount: 100, date: new Date('2023-12-12') },
    { name: 'Daniel OKO', rib: 'FR 3847586969607600050599B', amount: 100, date: new Date('2023-12-12') },
  ];

  globalTotalHelps = 730;
  donationPercentage = 35;
  loanPercentage = 65;
  femaleStudentHelps = 400;
  femaleStudentPercentage = 55;
  globalTotalAmount = 2896200;
  maleStudentHelps = 130;
  maleStudentPercentage = 45;

  studentList = [
    { lastName: 'Anita', firstName: 'Jean', school: 'Université de Lyon', rib: 'FR 3847586969607600050599B', nationality: 'Egyptien' },
    { lastName: 'OKO', firstName: 'Jean', school: 'Université de Lyon', rib: 'FR 3847586969607600050599B', nationality: 'Egyptien' },
    { lastName: 'ITOUA', firstName: 'Jean', school: 'Université de Lyon', rib: 'FR 3847586969607600050599B', nationality: 'Egyptien' },
    { lastName: 'ANOUA', firstName: 'Jean', school: 'Université de Lyon', rib: 'FR 3847586969607600050599B', nationality: 'Egyptien' },
    { lastName: 'VALENTIN', firstName: 'Jean', school: 'Université de Lyon', rib: 'FR 3847586969607600050599B', nationality: 'Egyptien' },
  ];

  constructor() { }
}
