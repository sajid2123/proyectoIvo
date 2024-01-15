import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePendienteRealizadaComponent } from './componente-pendiente-realizada.component';

describe('ComponentePendienteRealizadaComponent', () => {
  let component: ComponentePendienteRealizadaComponent;
  let fixture: ComponentFixture<ComponentePendienteRealizadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentePendienteRealizadaComponent]
    });
    fixture = TestBed.createComponent(ComponentePendienteRealizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
