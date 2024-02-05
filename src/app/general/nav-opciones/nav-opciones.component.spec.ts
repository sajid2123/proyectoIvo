import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOpcionesComponent } from './nav-opciones.component';

describe('NavOpcionesComponent', () => {
  let component: NavOpcionesComponent;
  let fixture: ComponentFixture<NavOpcionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavOpcionesComponent]
    });
    fixture = TestBed.createComponent(NavOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
