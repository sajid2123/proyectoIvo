import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbAtenderPacienteComponent } from './breadcrumb-atender-paciente.component';

describe('BreadcrumbAtenderPacienteComponent', () => {
  let component: BreadcrumbAtenderPacienteComponent;
  let fixture: ComponentFixture<BreadcrumbAtenderPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbAtenderPacienteComponent]
    });
    fixture = TestBed.createComponent(BreadcrumbAtenderPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
