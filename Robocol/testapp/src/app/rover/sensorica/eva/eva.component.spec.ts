/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { EvaComponent } from './eva.component';

describe('EvaComponent', () => {
  let component: EvaComponent;
  let fixture: ComponentFixture<EvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
