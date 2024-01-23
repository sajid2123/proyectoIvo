import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenetePaginaCitaRealizadasComponent } from './componenete-pagina-cita-realizadas.component';

describe('ComponenetePaginaCitaRealizadasComponent', () => {
  let component: ComponenetePaginaCitaRealizadasComponent;
  let fixture: ComponentFixture<ComponenetePaginaCitaRealizadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenetePaginaCitaRealizadasComponent]
    });
    fixture = TestBed.createComponent(ComponenetePaginaCitaRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
