import { TestBed } from '@angular/core/testing';

import { SensoricaService } from './sensorica.service';

describe('SensoricaService', () => {
  let service: SensoricaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensoricaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
