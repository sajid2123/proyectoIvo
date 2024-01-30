import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCitasPendientesComponent } from './tabla-citas-pendientes.component';

describe('TablaCitasPendientesComponent', () => {
  let component: TablaCitasPendientesComponent;
  let fixture: ComponentFixture<TablaCitasPendientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaCitasPendientesComponent]
    });
    fixture = TestBed.createComponent(TablaCitasPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
