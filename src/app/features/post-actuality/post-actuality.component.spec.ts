import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostActualityComponent } from './post-actuality.component';

describe('PostActualityComponent', () => {
  let component: PostActualityComponent;
  let fixture: ComponentFixture<PostActualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostActualityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostActualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
