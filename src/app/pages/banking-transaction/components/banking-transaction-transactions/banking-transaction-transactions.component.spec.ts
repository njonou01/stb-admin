import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingTransactionTransactionsComponent } from './banking-transaction-transactions.component';

describe('BankingTransactionTransactionsComponent', () => {
  let component: BankingTransactionTransactionsComponent;
  let fixture: ComponentFixture<BankingTransactionTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingTransactionTransactionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingTransactionTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
