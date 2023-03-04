import { TestBed } from '@angular/core/testing';

import { NikonService } from './nikon.service';

describe('NikonService', () => {
  let service: NikonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NikonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
