import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePaginaPrincipalRadiologoComponent } from './componente-pagina-principal-radiologo.component';

describe('ComponentePaginaPrincipalRadiologoComponent', () => {
  let component: ComponentePaginaPrincipalRadiologoComponent;
  let fixture: ComponentFixture<ComponentePaginaPrincipalRadiologoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentePaginaPrincipalRadiologoComponent]
    });
    fixture = TestBed.createComponent(ComponentePaginaPrincipalRadiologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
