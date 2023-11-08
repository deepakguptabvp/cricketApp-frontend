import { Component, OnInit } from '@angular/core';
import { MatchFixtureService } from 'src/app/services/match-fixture.service';

@Component({
  selector: 'app-user-contest',
  templateUrl: './user-contest.component.html',
  styleUrls: ['./user-contest.component.css']
})
export class UserContestComponent implements OnInit {

  constructor(private matchFixture: MatchFixtureService) {
  }

  ngOnInit(): void {
    this.getAllFixtures();
  }

  getAllFixtures() {
    this.matchFixture.fetchAllMatchFixtures().subscribe(
      {
        next: (res) => {
          this.matchFixture.allFixtures = res;
        },
      })
  }

}
