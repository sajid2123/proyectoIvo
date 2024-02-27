import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupImagenComponent } from './popup-imagen.component';

describe('PopupImagenComponent', () => {
  let component: PopupImagenComponent;
  let fixture: ComponentFixture<PopupImagenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupImagenComponent]
    });
    fixture = TestBed.createComponent(PopupImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
