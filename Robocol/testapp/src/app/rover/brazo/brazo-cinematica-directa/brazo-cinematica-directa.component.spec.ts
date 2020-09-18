import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrazoCinematicaDirectaComponent } from './brazo-cinematica-directa.component';

describe('BrazoCinematicaDirectaComponent', () => {
  let component: BrazoCinematicaDirectaComponent;
  let fixture: ComponentFixture<BrazoCinematicaDirectaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrazoCinematicaDirectaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrazoCinematicaDirectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
