import { TestBed } from '@angular/core/testing';

import { MessengerOrderService } from './messenger-order.service';

describe('MessengerOrderService', () => {
  let service: MessengerOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessengerOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
