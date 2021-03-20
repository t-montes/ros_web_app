import { TestBed } from '@angular/core/testing';

import { FPGAService } from './fpga.service';

describe('FPGAService', () => {
  let service: FPGAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FPGAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
