import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPacienteComponent } from './pagina-paciente.component';

describe('PaginaPacienteComponent', () => {
  let component: PaginaPacienteComponent;
  let fixture: ComponentFixture<PaginaPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaPacienteComponent]
    });
    fixture = TestBed.createComponent(PaginaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
