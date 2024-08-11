import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingTransactionDocumentsComponent } from './banking-transaction-documents.component';

describe('BankingTransactionDocumentsComponent', () => {
  let component: BankingTransactionDocumentsComponent;
  let fixture: ComponentFixture<BankingTransactionDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingTransactionDocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingTransactionDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
