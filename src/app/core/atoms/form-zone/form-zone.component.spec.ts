import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormZoneComponent } from './form-zone.component';

describe('FormZoneComponent', () => {
  let component: FormZoneComponent;
  let fixture: ComponentFixture<FormZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
