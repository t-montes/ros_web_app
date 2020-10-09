import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisOperacionComponent } from './analisis-operacion.component';

describe('AnalisisOperacionComponent', () => {
  let component: AnalisisOperacionComponent;
  let fixture: ComponentFixture<AnalisisOperacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisisOperacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
