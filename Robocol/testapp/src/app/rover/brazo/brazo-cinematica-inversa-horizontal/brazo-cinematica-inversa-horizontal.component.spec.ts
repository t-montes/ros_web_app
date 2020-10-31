import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrazoCinematicaInversaHorizontalComponent } from './brazo-cinematica-inversa-horizontal.component';

describe('BrazoCinematicaInversaHorizontalComponent', () => {
  let component: BrazoCinematicaInversaHorizontalComponent;
  let fixture: ComponentFixture<BrazoCinematicaInversaHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrazoCinematicaInversaHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrazoCinematicaInversaHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
