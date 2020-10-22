import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrazoCinematicaInversaVerticalComponent } from './brazo-cinematica-inversa-vertical.component';

describe('BrazoCinematicaInversaVerticalComponent', () => {
  let component: BrazoCinematicaInversaVerticalComponent;
  let fixture: ComponentFixture<BrazoCinematicaInversaVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrazoCinematicaInversaVerticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrazoCinematicaInversaVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
