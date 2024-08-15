import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionBlocComponent } from './option-bloc.component';

describe('OptionBlocComponent', () => {
  let component: OptionBlocComponent;
  let fixture: ComponentFixture<OptionBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionBlocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
