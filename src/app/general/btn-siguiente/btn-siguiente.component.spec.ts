import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSiguienteComponent } from './btn-siguiente.component';

describe('BtnSiguienteComponent', () => {
  let component: BtnSiguienteComponent;
  let fixture: ComponentFixture<BtnSiguienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnSiguienteComponent]
    });
    fixture = TestBed.createComponent(BtnSiguienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
