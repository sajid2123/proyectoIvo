import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePaginaPrincipalAdministrativoComponent } from './componente-pagina-principal-administrativo.component';

describe('ComponentePaginaPrincipalMedicoComponent', () => {
  let component: ComponentePaginaPrincipalAdministrativoComponent;
  let fixture: ComponentFixture<ComponentePaginaPrincipalAdministrativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentePaginaPrincipalAdministrativoComponent]
    });
    fixture = TestBed.createComponent(ComponentePaginaPrincipalAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
