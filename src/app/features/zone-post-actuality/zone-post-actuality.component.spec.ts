import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonePostActualityComponent } from './zone-post-actuality.component';

describe('ZonePostActualityComponent', () => {
  let component: ZonePostActualityComponent;
  let fixture: ComponentFixture<ZonePostActualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonePostActualityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonePostActualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
