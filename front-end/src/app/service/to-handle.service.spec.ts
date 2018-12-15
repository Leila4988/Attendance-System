import { TestBed } from '@angular/core/testing';

import { ToHandleService } from './to-handle.service';

describe('ToHandleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToHandleService = TestBed.get(ToHandleService);
    expect(service).toBeTruthy();
  });
});
