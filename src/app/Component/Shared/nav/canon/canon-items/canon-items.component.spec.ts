import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanonItemsComponent } from './canon-items.component';

describe('CanonItemsComponent', () => {
  let component: CanonItemsComponent;
  let fixture: ComponentFixture<CanonItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanonItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanonItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
