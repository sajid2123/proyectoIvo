import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGenerarVolanteComponent } from './formulario-generar-volante.component';

describe('FormularioGenerarVolanteComponent', () => {
  let component: FormularioGenerarVolanteComponent;
  let fixture: ComponentFixture<FormularioGenerarVolanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioGenerarVolanteComponent]
    });
    fixture = TestBed.createComponent(FormularioGenerarVolanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
