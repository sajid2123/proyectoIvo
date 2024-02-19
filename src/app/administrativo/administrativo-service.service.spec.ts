import { TestBed } from '@angular/core/testing';

import { AdministrativoServiceService } from './administrativo-service.service';

describe('AdministrativoServiceService', () => {
  let service: AdministrativoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministrativoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
