import { TestBed } from '@angular/core/testing';
import { SensoricaSocket } from './sensoricaSocket.service';

describe('SensoricaSocket', () => {
  let service: SensoricaSocket;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensoricaSocket);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
