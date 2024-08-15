import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressebarComponent } from './progressebar.component';

describe('ProgressebarComponent', () => {
  let component: ProgressebarComponent;
  let fixture: ComponentFixture<ProgressebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
