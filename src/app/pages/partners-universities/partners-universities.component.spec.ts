import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersUniversitiesComponent } from './partners-universities.component';

describe('PartnersUniversitiesComponent', () => {
  let component: PartnersUniversitiesComponent;
  let fixture: ComponentFixture<PartnersUniversitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnersUniversitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
