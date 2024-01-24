import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCitasPacientesComponent } from './tabla-citas-pacientes.component';

describe('TablaCitasPacientesComponent', () => {
  let component: TablaCitasPacientesComponent;
  let fixture: ComponentFixture<TablaCitasPacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaCitasPacientesComponent]
    });
    fixture = TestBed.createComponent(TablaCitasPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
