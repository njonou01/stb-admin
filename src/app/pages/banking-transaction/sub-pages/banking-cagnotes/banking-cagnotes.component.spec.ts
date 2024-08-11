import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingCagnotesComponent } from './banking-cagnotes.component';

describe('BankingCagnotesComponent', () => {
  let component: BankingCagnotesComponent;
  let fixture: ComponentFixture<BankingCagnotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingCagnotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingCagnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
