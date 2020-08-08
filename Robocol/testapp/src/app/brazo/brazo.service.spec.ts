import { TestBed } from '@angular/core/testing';

import { BrazoService } from './brazo.service';

describe('BrazoService', () => {
  let service: BrazoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrazoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
