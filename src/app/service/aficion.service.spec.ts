import { TestBed } from '@angular/core/testing';

import { AficionService } from './aficion.service';

describe('AficionService', () => {
  let service: AficionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AficionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
