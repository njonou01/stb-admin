import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationSectionComponent } from './association-section.component';

describe('AssociationSectionComponent', () => {
  let component: AssociationSectionComponent;
  let fixture: ComponentFixture<AssociationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociationSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
