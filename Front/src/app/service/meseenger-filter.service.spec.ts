import { TestBed } from '@angular/core/testing';

import { MeseengerFilterService } from './meseenger-filter.service';

describe('MeseengerFilterService', () => {
  let service: MeseengerFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeseengerFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
