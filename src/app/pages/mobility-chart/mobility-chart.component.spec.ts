import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilityChartComponent } from './mobility-chart.component';

describe('MobilityChartComponent', () => {
  let component: MobilityChartComponent;
  let fixture: ComponentFixture<MobilityChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilityChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
