import { TestBed } from '@angular/core/testing';

import { DemoSharedService } from './demo-shared.service';

describe('DemoSharedService', () => {
  let service: DemoSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
