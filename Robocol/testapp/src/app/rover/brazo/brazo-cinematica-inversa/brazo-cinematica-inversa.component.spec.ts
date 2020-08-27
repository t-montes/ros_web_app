import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrazoCinematicaInversaComponent } from './brazo-cinematica-inversa.component';

describe('BrazoCinematicaInversaComponent', () => {
  let component: BrazoCinematicaInversaComponent;
  let fixture: ComponentFixture<BrazoCinematicaInversaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrazoCinematicaInversaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrazoCinematicaInversaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
