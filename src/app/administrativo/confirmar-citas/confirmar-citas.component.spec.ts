import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarCitasComponent } from './confirmar-citas.component';

describe('ConfirmarCitasComponent', () => {
  let component: ConfirmarCitasComponent;
  let fixture: ComponentFixture<ConfirmarCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmarCitasComponent]
    });
    fixture = TestBed.createComponent(ConfirmarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
