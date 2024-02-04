import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasosFormularioComponent } from './pasos-formulario.component';

describe('PasosFormularioComponent', () => {
  let component: PasosFormularioComponent;
  let fixture: ComponentFixture<PasosFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasosFormularioComponent]
    });
    fixture = TestBed.createComponent(PasosFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
