import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMatchFixturesComponent } from './user-match-fixtures.component';

describe('UserMatchFixturesComponent', () => {
  let component: UserMatchFixturesComponent;
  let fixture: ComponentFixture<UserMatchFixturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMatchFixturesComponent]
    });
    fixture = TestBed.createComponent(UserMatchFixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
