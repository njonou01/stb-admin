import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-mobility-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobility-chart.component.html',
  styleUrl: './mobility-chart.component.scss'
})
export class MobilityChartComponent implements OnInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;
  chart!: Chart;

  ngOnInit() {
    // this.createChart();
  }

  // createChart() {
  //   const ctx = this.chartCanvas.nativeElement.getContext('2d');
  //   this.chart = new Chart(ctx, {
  //     type: 'line',
  //     data: {
  //       labels: ['', '', '', '', '', ''],
  //       datasets: [
  //         {
  //           label: 'Etudiant école privé',
  //           data: [5, 15, 10, 5, 20, 0],
  //           backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //           borderColor: 'rgba(255, 99, 132, 1)',
  //           fill: true,
  //         },
  //         {
  //           label: 'Etablissement public',
  //           data: [0, 5, 15, 10, 5, 20],
  //           backgroundColor: 'rgba(75, 192, 192, 0.5)',
  //           borderColor: 'rgba(75, 192, 192, 1)',
  //           fill: true,
  //         },
  //         {
  //           label: 'Etudiants filles',
  //           data: [10, 20, 15, 10, 25, 5],
  //           backgroundColor: 'rgba(255, 206, 86, 0.5)',
  //           borderColor: 'rgba(255, 206, 86, 1)',
  //           fill: true,
  //         },
  //         {
  //           label: 'Etudiants garçons',
  //           data: [15, 25, 20, 15, 30, 10],
  //           backgroundColor: 'rgba(54, 162, 235, 0.5)',
  //           borderColor: 'rgba(54, 162, 235, 1)',
  //           fill: true,
  //         }
  //       ]
  //     },
  //     options: {
  //       responsive: true,
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //           max: 60
  //         }
  //       }
  //     }
  //   });
  // }
}
