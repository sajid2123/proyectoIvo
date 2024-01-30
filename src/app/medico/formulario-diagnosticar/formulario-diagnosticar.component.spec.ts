import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDiagnosticarComponent } from './formulario-diagnosticar.component';

describe('FormularioDiagnosticarComponent', () => {
  let component: FormularioDiagnosticarComponent;
  let fixture: ComponentFixture<FormularioDiagnosticarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioDiagnosticarComponent]
    });
    fixture = TestBed.createComponent(FormularioDiagnosticarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
