import { TestBed } from '@angular/core/testing';

import { BackProductDetailsBuyService } from './back-product-details-buy.service';

describe('BackProductDetailsBuyService', () => {
  let service: BackProductDetailsBuyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackProductDetailsBuyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
