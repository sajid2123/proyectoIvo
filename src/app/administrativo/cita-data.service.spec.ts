import { TestBed } from '@angular/core/testing';

import { CitaDataService } from './cita-data.service';

describe('CitaDataService', () => {
  let service: CitaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
