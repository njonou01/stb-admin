import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostActualiteComponent } from './post-actualite.component';

describe('PostActualiteComponent', () => {
  let component: PostActualiteComponent;
  let fixture: ComponentFixture<PostActualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostActualiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
