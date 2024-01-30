import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasPacienteEspecificacionesComponent } from './citas-paciente-especificaciones.component';

describe('CitasPacienteEspecificacionesComponent', () => {
  let component: CitasPacienteEspecificacionesComponent;
  let fixture: ComponentFixture<CitasPacienteEspecificacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitasPacienteEspecificacionesComponent]
    });
    fixture = TestBed.createComponent(CitasPacienteEspecificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
