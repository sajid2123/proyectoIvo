import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCitasRealizadasComponent } from './tabla-citas-realizadas.component';

describe('TablaCitasRealizadasComponent', () => {
  let component: TablaCitasRealizadasComponent;
  let fixture: ComponentFixture<TablaCitasRealizadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaCitasRealizadasComponent]
    });
    fixture = TestBed.createComponent(TablaCitasRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
