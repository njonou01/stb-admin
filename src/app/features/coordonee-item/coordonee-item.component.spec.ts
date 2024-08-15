import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordoneeItemComponent } from './coordonee-item.component';

describe('CoordoneeItemComponent', () => {
  let component: CoordoneeItemComponent;
  let fixture: ComponentFixture<CoordoneeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordoneeItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordoneeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
