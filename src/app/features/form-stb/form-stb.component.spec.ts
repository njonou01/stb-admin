import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStbComponent } from './form-stb.component';

describe('FormStbComponent', () => {
  let component: FormStbComponent;
  let fixture: ComponentFixture<FormStbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormStbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
