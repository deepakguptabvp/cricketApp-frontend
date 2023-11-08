import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlayersComponent } from './user-players.component';

describe('UserPlayersComponent', () => {
  let component: UserPlayersComponent;
  let fixture: ComponentFixture<UserPlayersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPlayersComponent]
    });
    fixture = TestBed.createComponent(UserPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
