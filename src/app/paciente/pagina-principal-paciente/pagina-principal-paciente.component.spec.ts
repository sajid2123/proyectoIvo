import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrincipalPacienteComponent } from './pagina-principal-paciente.component';

describe('PaginaPrincipalPacienteComponent', () => {
  let component: PaginaPrincipalPacienteComponent;
  let fixture: ComponentFixture<PaginaPrincipalPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaPrincipalPacienteComponent]
    });
    fixture = TestBed.createComponent(PaginaPrincipalPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
