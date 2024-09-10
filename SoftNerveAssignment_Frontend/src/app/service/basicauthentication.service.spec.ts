import { TestBed } from '@angular/core/testing';

import { BasicauthenticationService } from './basicauthentication.service';

describe('BasicauthenticationService', () => {
  let service: BasicauthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicauthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
