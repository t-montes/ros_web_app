import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrazoCopilotoComponent } from './brazo-copiloto.component';

describe('BrazoCopilotoComponent', () => {
  let component: BrazoCopilotoComponent;
  let fixture: ComponentFixture<BrazoCopilotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrazoCopilotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrazoCopilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
