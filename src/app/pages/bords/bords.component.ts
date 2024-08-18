import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { GraphboardComponent } from '@/core/atoms/chart/graphboard/graphboard.component';
import { RedButtonComponent } from '@/core/atoms/buttons/red-button/red-button.component';
import { CaseoptionComponent } from '@/features/cases/caseoption/caseoption.component';


@Component({
  selector: 'app-bords',
  standalone: true,
  imports: [GraphboardComponent,RedButtonComponent,CaseoptionComponent],
  templateUrl: './bords.component.html',
  styleUrl: './bords.component.scss'
})
export class BordsComponent implements AfterViewInit {
  chartNodes: { label: string; data: number[] }[] = [
    { label: 'Initial Node', data: [10, 20, 30, 40, 50, 60] }
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    // this.addRandomNode();
    // this.cdr.detectChanges();
    
  }

  


  addRandomNode(): void {
    const newNode = {
      label: `Node ${this.chartNodes.length + 1}`,
      data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100))
    };
    this.chartNodes = [...this.chartNodes, newNode];
  }
}
