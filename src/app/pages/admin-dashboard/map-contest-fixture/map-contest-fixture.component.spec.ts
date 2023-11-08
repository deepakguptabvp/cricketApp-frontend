import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapContestFixtureComponent } from './map-contest-fixture.component';

describe('MapContestFixtureComponent', () => {
  let component: MapContestFixtureComponent;
  let fixture: ComponentFixture<MapContestFixtureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapContestFixtureComponent]
    });
    fixture = TestBed.createComponent(MapContestFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
