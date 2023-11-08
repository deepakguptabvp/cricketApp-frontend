import { TestBed } from '@angular/core/testing';

import { MapingContestFixtureService } from './maping-contest-fixture.service';

describe('MapingContestFixtureService', () => {
  let service: MapingContestFixtureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapingContestFixtureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
