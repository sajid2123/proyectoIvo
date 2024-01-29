import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCitasPacientePruebasComponent } from './tabla-citas-paciente-pruebas.component';

describe('TablaCitasPacientePruebasComponent', () => {
  let component: TablaCitasPacientePruebasComponent;
  let fixture: ComponentFixture<TablaCitasPacientePruebasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaCitasPacientePruebasComponent]
    });
    fixture = TestBed.createComponent(TablaCitasPacientePruebasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
