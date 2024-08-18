import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyonAssociation3Component } from './lyon-association3.component';

describe('LyonAssociation3Component', () => {
  let component: LyonAssociation3Component;
  let fixture: ComponentFixture<LyonAssociation3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LyonAssociation3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LyonAssociation3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
