import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonyItemsComponent } from './sony-items.component';

describe('SonyItemsComponent', () => {
  let component: SonyItemsComponent;
  let fixture: ComponentFixture<SonyItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonyItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonyItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
