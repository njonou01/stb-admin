import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextZoneComponent } from './text-zone.component';

describe('TextZoneComponent', () => {
  let component: TextZoneComponent;
  let fixture: ComponentFixture<TextZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
