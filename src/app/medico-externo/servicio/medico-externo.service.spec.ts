import { TestBed } from '@angular/core/testing';

import { MedicoExternoService } from './medico-externo.service';

describe('MedicoExternoService', () => {
  let service: MedicoExternoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicoExternoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
