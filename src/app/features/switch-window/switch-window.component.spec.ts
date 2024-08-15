import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchWindowComponent } from './switch-window.component';

describe('SwitchWindowComponent', () => {
  let component: SwitchWindowComponent;
  let fixture: ComponentFixture<SwitchWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
