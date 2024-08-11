import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingOperationComponent } from './banking-operation.component';

describe('BankingOperationComponent', () => {
  let component: BankingOperationComponent;
  let fixture: ComponentFixture<BankingOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingOperationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
