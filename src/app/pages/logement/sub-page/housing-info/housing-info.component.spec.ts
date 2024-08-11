import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingInfoComponent } from './housing-info.component';

describe('HousingInfoComponent', () => {
  let component: HousingInfoComponent;
  let fixture: ComponentFixture<HousingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
