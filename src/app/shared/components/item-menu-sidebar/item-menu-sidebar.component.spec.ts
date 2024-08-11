import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMenuSidebarComponent } from './item-menu-sidebar.component';

describe('ItemMenuSidebarComponent', () => {
  let component: ItemMenuSidebarComponent;
  let fixture: ComponentFixture<ItemMenuSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemMenuSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemMenuSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
