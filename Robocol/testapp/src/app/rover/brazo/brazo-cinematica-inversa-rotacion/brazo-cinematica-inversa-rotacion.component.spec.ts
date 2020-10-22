import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrazoCinematicaInversaRotacionComponent } from './brazo-cinematica-inversa-rotacion.component';

describe('BrazoCinematicaInversaRotacionComponent', () => {
  let component: BrazoCinematicaInversaRotacionComponent;
  let fixture: ComponentFixture<BrazoCinematicaInversaRotacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrazoCinematicaInversaRotacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrazoCinematicaInversaRotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
