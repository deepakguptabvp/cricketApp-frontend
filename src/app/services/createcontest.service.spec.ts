import { TestBed } from '@angular/core/testing';

import { CreatecontestService } from './createcontest.service';

describe('CreatecontestService', () => {
  let service: CreatecontestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatecontestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
