import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyonAssociationComponent } from './lyon-association.component';

describe('LyonAssociationComponent', () => {
  let component: LyonAssociationComponent;
  let fixture: ComponentFixture<LyonAssociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LyonAssociationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LyonAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
