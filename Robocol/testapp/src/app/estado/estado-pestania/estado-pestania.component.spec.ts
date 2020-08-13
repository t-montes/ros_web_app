import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoPestaniaComponent } from './estado-pestania.component';

describe('EstadoPestaniaComponent', () => {
  let component: EstadoPestaniaComponent;
  let fixture: ComponentFixture<EstadoPestaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoPestaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoPestaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
