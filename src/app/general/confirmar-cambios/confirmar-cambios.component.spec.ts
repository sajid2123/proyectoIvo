import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarCambiosComponent } from './confirmar-cambios.component';

describe('ConfirmarCambiosComponent', () => {
  let component: ConfirmarCambiosComponent;
  let fixture: ComponentFixture<ConfirmarCambiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmarCambiosComponent]
    });
    fixture = TestBed.createComponent(ConfirmarCambiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
