import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasPacienteDetallesComponent } from './citas-paciente-detalles.component';

describe('CitasPacienteDetallesComponent', () => {
  let component: CitasPacienteDetallesComponent;
  let fixture: ComponentFixture<CitasPacienteDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitasPacienteDetallesComponent]
    });
    fixture = TestBed.createComponent(CitasPacienteDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
