import { TestBed } from '@angular/core/testing';

import { CustDetailsService } from './cust-details.service';

describe('CustDetailsService', () => {
  let service: CustDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
