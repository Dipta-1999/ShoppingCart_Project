import { TestBed } from '@angular/core/testing';

import { SonyService } from './sony.service';

describe('SonyService', () => {
  let service: SonyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SonyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
