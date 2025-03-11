import { TestBed } from '@angular/core/testing';

import { EmployeerouteguardService } from './employeerouteguard.service';

describe('EmployeerouteguardService', () => {
  let service: EmployeerouteguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeerouteguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
