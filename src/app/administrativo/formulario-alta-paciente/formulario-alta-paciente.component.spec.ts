import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAltaPacienteComponent } from './formulario-alta-paciente.component';

describe('FormularioAltaPacienteComponent', () => {
  let component: FormularioAltaPacienteComponent;
  let fixture: ComponentFixture<FormularioAltaPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioAltaPacienteComponent]
    });
    fixture = TestBed.createComponent(FormularioAltaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
