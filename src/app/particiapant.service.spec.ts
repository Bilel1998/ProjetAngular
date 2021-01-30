import { TestBed } from '@angular/core/testing';

import { ParticiapantService } from './particiapant.service';

describe('ParticiapantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParticiapantService = TestBed.get(ParticiapantService);
    expect(service).toBeTruthy();
  });
});
