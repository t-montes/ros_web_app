import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorPresionComponent } from './sensor-presion.component';

describe('SensorPresionComponent', () => {
  let component: SensorPresionComponent;
  let fixture: ComponentFixture<SensorPresionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorPresionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorPresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
