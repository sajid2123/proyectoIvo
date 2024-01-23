import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAnteriorComponent } from './btn-anterior.component';

describe('BtnAnteriorComponent', () => {
  let component: BtnAnteriorComponent;
  let fixture: ComponentFixture<BtnAnteriorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnAnteriorComponent]
    });
    fixture = TestBed.createComponent(BtnAnteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
