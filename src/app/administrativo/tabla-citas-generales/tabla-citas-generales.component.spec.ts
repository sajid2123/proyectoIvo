import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCitasGeneralesComponent } from './tabla-citas-generales.component';

describe('TablaCitasGeneralesComponent', () => {
  let component: TablaCitasGeneralesComponent;
  let fixture: ComponentFixture<TablaCitasGeneralesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaCitasGeneralesComponent]
    });
    fixture = TestBed.createComponent(TablaCitasGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
