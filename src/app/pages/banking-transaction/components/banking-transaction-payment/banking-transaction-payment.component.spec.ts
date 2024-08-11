import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingTransactionPaymentComponent } from './banking-transaction-payment.component';

describe('BankingTransactionPaymentComponent', () => {
  let component: BankingTransactionPaymentComponent;
  let fixture: ComponentFixture<BankingTransactionPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingTransactionPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingTransactionPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
