import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordsComponent } from './bords.component';

describe('BordsComponent', () => {
  let component: BordsComponent;
  let fixture: ComponentFixture<BordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
