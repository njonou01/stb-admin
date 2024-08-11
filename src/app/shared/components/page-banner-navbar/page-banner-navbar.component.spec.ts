import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBannerNavbarComponent } from './page-banner-navbar.component';

describe('PageBannerNavbarComponent', () => {
  let component: PageBannerNavbarComponent;
  let fixture: ComponentFixture<PageBannerNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBannerNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBannerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
