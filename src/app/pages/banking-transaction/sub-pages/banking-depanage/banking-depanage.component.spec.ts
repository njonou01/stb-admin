import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingDepanageComponent } from './banking-depanage.component';

describe('BankingDepanageComponent', () => {
  let component: BankingDepanageComponent;
  let fixture: ComponentFixture<BankingDepanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingDepanageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingDepanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
