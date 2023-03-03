import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyProductItemComponent } from './buy-product-item.component';

describe('BuyProductItemComponent', () => {
  let component: BuyProductItemComponent;
  let fixture: ComponentFixture<BuyProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyProductItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
