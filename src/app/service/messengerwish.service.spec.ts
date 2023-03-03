import { TestBed } from '@angular/core/testing';

import { MessengerwishService } from './messengerwish.service';

describe('MessengerwishService', () => {
  let service: MessengerwishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessengerwishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
