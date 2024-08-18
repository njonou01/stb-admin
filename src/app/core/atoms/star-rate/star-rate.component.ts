import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-star-rate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rate.component.html',
  styleUrl: './star-rate.component.scss'
})
export class StarRateComponent {
  @Input() rate:any=4.5;
  isHalf:boolean=false;

  ngOnInit(): void {
    let i = this.rate*10;
    if(i%2!=0 && i%5==0 ){
      this.isHalf=true;
    }
    
  }


  ngAfterViewInit(): void {
    
    
  }

  get numbers(): number[] {
    return Array(parseInt(this.rate)).fill(0);
  }


}
