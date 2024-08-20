import { TestBed } from '@angular/core/testing';

import { LogeerService } from './logeer.service';

describe('LogeerService', () => {
  let service: LogeerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogeerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
