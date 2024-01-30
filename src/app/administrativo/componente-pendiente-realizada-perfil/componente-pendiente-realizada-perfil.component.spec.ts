import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePendienteRealizadaPerfilComponent } from './componente-pendiente-realizada-perfil.component';

describe('ComponentePendienteRealizadaPerfilComponent', () => {
  let component: ComponentePendienteRealizadaPerfilComponent;
  let fixture: ComponentFixture<ComponentePendienteRealizadaPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentePendienteRealizadaPerfilComponent]
    });
    fixture = TestBed.createComponent(ComponentePendienteRealizadaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
