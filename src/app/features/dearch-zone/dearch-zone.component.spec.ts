import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DearchZoneComponent } from './dearch-zone.component';

describe('DearchZoneComponent', () => {
  let component: DearchZoneComponent;
  let fixture: ComponentFixture<DearchZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DearchZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DearchZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
