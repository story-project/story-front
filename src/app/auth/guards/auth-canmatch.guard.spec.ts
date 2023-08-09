import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { authCanmatchGuard } from './auth-canmatch.guard';

describe('authCanmatchGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authCanmatchGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
