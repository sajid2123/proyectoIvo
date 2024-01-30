import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtenderPacienteMedicoComponent } from './atender-paciente-medico.component';

describe('AtenderPacienteMedicoComponent', () => {
  let component: AtenderPacienteMedicoComponent;
  let fixture: ComponentFixture<AtenderPacienteMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtenderPacienteMedicoComponent]
    });
    fixture = TestBed.createComponent(AtenderPacienteMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
