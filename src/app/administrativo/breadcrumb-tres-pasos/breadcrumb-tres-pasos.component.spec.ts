import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbTresPasosComponent } from './breadcrumb-tres-pasos.component';

describe('BreadcrumbTresPasosComponent', () => {
  let component: BreadcrumbTresPasosComponent;
  let fixture: ComponentFixture<BreadcrumbTresPasosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbTresPasosComponent]
    });
    fixture = TestBed.createComponent(BreadcrumbTresPasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
