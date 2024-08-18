import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Association2Component } from './association2.component';

describe('Association2Component', () => {
  let component: Association2Component;
  let fixture: ComponentFixture<Association2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Association2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Association2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
