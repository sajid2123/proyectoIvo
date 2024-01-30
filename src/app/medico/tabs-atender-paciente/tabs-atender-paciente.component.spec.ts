import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsAtenderPacienteComponent } from './tabs-atender-paciente.component';

describe('TabsAtenderPacienteComponent', () => {
  let component: TabsAtenderPacienteComponent;
  let fixture: ComponentFixture<TabsAtenderPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsAtenderPacienteComponent]
    });
    fixture = TestBed.createComponent(TabsAtenderPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
