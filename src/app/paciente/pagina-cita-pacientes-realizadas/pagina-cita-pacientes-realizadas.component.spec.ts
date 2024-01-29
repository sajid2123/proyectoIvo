import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCitaPacientesRealizadasComponent } from './pagina-cita-pacientes-realizadas.component';

describe('PaginaCitaPacientesRealizadasComponent', () => {
  let component: PaginaCitaPacientesRealizadasComponent;
  let fixture: ComponentFixture<PaginaCitaPacientesRealizadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaCitaPacientesRealizadasComponent]
    });
    fixture = TestBed.createComponent(PaginaCitaPacientesRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
