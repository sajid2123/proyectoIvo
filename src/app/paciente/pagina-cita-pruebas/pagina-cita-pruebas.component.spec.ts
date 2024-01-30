import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCitaPruebasComponent } from './pagina-cita-pruebas.component';

describe('PaginaCitaPruebasComponent', () => {
  let component: PaginaCitaPruebasComponent;
  let fixture: ComponentFixture<PaginaCitaPruebasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaCitaPruebasComponent]
    });
    fixture = TestBed.createComponent(PaginaCitaPruebasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
