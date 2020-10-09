import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoTopicosComponent } from './estado-topicos.component';

describe('EstadoTopicosComponent', () => {
  let component: EstadoTopicosComponent;
  let fixture: ComponentFixture<EstadoTopicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoTopicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoTopicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
