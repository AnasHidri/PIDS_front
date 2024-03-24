import { TestBed } from '@angular/core/testing';

import { AllocationPreferencesServiceService } from './allocation-preferences-service.service';

describe('AllocationPreferencesServiceService', () => {
  let service: AllocationPreferencesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllocationPreferencesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
