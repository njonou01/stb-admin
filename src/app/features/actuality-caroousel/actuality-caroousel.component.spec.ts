import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualityCaroouselComponent } from './actuality-caroousel.component';

describe('ActualityCaroouselComponent', () => {
  let component: ActualityCaroouselComponent;
  let fixture: ComponentFixture<ActualityCaroouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualityCaroouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualityCaroouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
