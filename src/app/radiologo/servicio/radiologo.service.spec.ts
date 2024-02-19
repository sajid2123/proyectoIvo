import { TestBed } from '@angular/core/testing';

import { RadiologoService } from './radiologo.service';

describe('RadiologoService', () => {
  let service: RadiologoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadiologoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
