import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrazoCoordenadasComponent } from './brazo-coordenadas.component';

describe('BrazoCoordenadasComponent', () => {
  let component: BrazoCoordenadasComponent;
  let fixture: ComponentFixture<BrazoCoordenadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrazoCoordenadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrazoCoordenadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
