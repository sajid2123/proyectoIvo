import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAtenderPacienteComponent } from './formulario-atender-paciente.component';

describe('FormularioAtenderPacienteComponent', () => {
  let component: FormularioAtenderPacienteComponent;
  let fixture: ComponentFixture<FormularioAtenderPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioAtenderPacienteComponent]
    });
    fixture = TestBed.createComponent(FormularioAtenderPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
