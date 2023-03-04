import { TestBed } from '@angular/core/testing';

import { ViewDetailsService } from './view-details.service';

describe('ViewDetailsService', () => {
  let service: ViewDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
