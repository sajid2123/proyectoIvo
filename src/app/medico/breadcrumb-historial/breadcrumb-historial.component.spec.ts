import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbHistorialComponent } from './breadcrumb-historial.component';

describe('BreadcrumbHistorialComponent', () => {
  let component: BreadcrumbHistorialComponent;
  let fixture: ComponentFixture<BreadcrumbHistorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbHistorialComponent]
    });
    fixture = TestBed.createComponent(BreadcrumbHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
