import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyonAssociation2Component } from './lyon-association2.component';

describe('LyonAssociation2Component', () => {
  let component: LyonAssociation2Component;
  let fixture: ComponentFixture<LyonAssociation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LyonAssociation2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LyonAssociation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
