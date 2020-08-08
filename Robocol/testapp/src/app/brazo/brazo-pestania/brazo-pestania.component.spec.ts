import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrazoPestaniaComponent } from './brazo-pestania.component';

describe('BrazoPestaniaComponent', () => {
  let component: BrazoPestaniaComponent;
  let fixture: ComponentFixture<BrazoPestaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrazoPestaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrazoPestaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
