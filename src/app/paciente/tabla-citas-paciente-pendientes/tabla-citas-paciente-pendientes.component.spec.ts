import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCitasPacientePendientesComponent } from './tabla-citas-paciente-pendientes.component';

describe('TablaCitasPacientePendientesComponent', () => {
  let component: TablaCitasPacientePendientesComponent;
  let fixture: ComponentFixture<TablaCitasPacientePendientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaCitasPacientePendientesComponent]
    });
    fixture = TestBed.createComponent(TablaCitasPacientePendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
