import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrincipalMedicoComponent } from './pagina-principal-medico.component';

describe('PaginaPrincipalMedicoComponent', () => {
  let component: PaginaPrincipalMedicoComponent;
  let fixture: ComponentFixture<PaginaPrincipalMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaPrincipalMedicoComponent]
    });
    fixture = TestBed.createComponent(PaginaPrincipalMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
