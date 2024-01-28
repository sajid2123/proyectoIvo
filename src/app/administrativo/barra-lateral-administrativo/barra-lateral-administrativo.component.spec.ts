import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraLateralAdministrativoComponent } from './barra-lateral-administrativo.component';

describe('BarraLateralMedicoComponent', () => {
  let component: BarraLateralAdministrativoComponent;
  let fixture: ComponentFixture<BarraLateralAdministrativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarraLateralAdministrativoComponent]
    });
    fixture = TestBed.createComponent(BarraLateralAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
