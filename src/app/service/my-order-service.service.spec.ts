import { TestBed } from '@angular/core/testing';

import { MyOrderServiceService } from './my-order-service.service';

describe('MyOrderServiceService', () => {
  let service: MyOrderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyOrderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
