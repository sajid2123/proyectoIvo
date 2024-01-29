import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCitasPacienteRealizadasComponent } from './tabla-citas-paciente-realizadas.component';

describe('TablaCitasPacienteRealizadasComponent', () => {
  let component: TablaCitasPacienteRealizadasComponent;
  let fixture: ComponentFixture<TablaCitasPacienteRealizadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaCitasPacienteRealizadasComponent]
    });
    fixture = TestBed.createComponent(TablaCitasPacienteRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
