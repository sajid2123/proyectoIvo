import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcumbAdministrativoComponent } from './breadcumb-administrativo.component';

describe('BreadcumbAdministrativoComponent', () => {
  let component: BreadcumbAdministrativoComponent;
  let fixture: ComponentFixture<BreadcumbAdministrativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcumbAdministrativoComponent]
    });
    fixture = TestBed.createComponent(BreadcumbAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
