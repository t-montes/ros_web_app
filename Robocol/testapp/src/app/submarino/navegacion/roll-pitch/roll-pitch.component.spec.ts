import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollPitchComponent } from './roll-pitch.component';

describe('RollPitchComponent', () => {
  let component: RollPitchComponent;
  let fixture: ComponentFixture<RollPitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollPitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RollPitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
