import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCitasComponent } from './tabla-citas.component';

describe('TablaCitasComponent', () => {
  let component: TablaCitasComponent;
  let fixture: ComponentFixture<TablaCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaCitasComponent]
    });
    fixture = TestBed.createComponent(TablaCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
