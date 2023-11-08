import { TestBed } from '@angular/core/testing';

import { MatchFixtureService } from './match-fixture.service';

describe('MatchFixtureService', () => {
  let service: MatchFixtureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchFixtureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
