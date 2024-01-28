import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarModificarCitaComponent } from './confirmar-modificar-cita.component';

describe('ConfirmarModificarCitaComponent', () => {
  let component: ConfirmarModificarCitaComponent;
  let fixture: ComponentFixture<ConfirmarModificarCitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmarModificarCitaComponent]
    });
    fixture = TestBed.createComponent(ConfirmarModificarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
