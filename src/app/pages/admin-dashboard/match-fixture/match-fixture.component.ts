import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatchFixtureService } from 'src/app/services/match-fixture.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-match-fixture',
  templateUrl: './match-fixture.component.html',
  styleUrls: ['./match-fixture.component.css']
})
export class MatchFixtureComponent implements OnInit {

  PlayerArray: any[] = [];

  TeamArray: any;

  currentMatchFixId = "";

  matchFixData = {
    teamA: "",
    teamB: "",
    venue: "",
    date: ""
  }

  constructor(private teamService: TeamService, private matchFixService: MatchFixtureService, private router: Router, private snack: MatSnackBar, private http: HttpClient) { }

  ngOnInit(): void {
    this.matchFixService.fetchAllMatchFixtures().subscribe((data: any) => {
      this.PlayerArray = data;
      console.log(this.PlayerArray);
    })

    this.teamService.fetchall().subscribe((data) => {
      this.TeamArray = data;
      // console.log(this.TeamArray);
    })
  }

  formSubmit() {

    if (this.matchFixData.teamA == '' || this.matchFixData.teamA == null) {
      alert("Team A is required !");
      return;
    }

    if (this.matchFixData.teamB == '' || this.matchFixData.teamB == null) {
      alert("Team B is required !");
      return;
    }

    if (this.matchFixData.venue == '' || this.matchFixData.venue == null) {
      alert("Venue is required !");
      return;
    }

    if (this.matchFixData.date == '' || this.matchFixData.date == null) {
      alert("Date and Time is required !");
      return;
    }

    console.log(this.matchFixData);
    this.matchFixService.addMatchFixture(this.matchFixData).subscribe(
      (data:any) => {
        // console.log("ddpkkkkkkkkkkk")
        console.log(data);
        alert("Match Fixture added successfully..");
        window.location.reload();
      },
      (error) => {
        console.log(error);
        this.snack.open('Something went wrong', 'okay', {
          duration: 2000
        });
      })

  }

  edit(data: any) {
    this.matchFixData.teamA = data.teamA;
    this.matchFixData.teamB = data.teamB;
    this.matchFixData.venue = data.venue;
    this.matchFixData.date = data.date;
    this.currentMatchFixId = data.id;
  }

  updateMatchFix() {
    let bodyData = {
      "teamA": this.matchFixData.teamA,
      "teamB": this.matchFixData.teamB,
      "venue": this.matchFixData.venue,
      "date": this.matchFixData.date
    };

    this.http.put("http://localhost:8080/cricket-app/matchfixing/update/" + this.currentMatchFixId, bodyData).subscribe(
      (data) => {
        alert("Match Fixture data updated successfully..");
        console.log(data);
      }, (error) => {
        console.log('Fail');
        console.log(error);
        this.snack.open('Invalid Details !! Try again', 'okay', {
          duration: 1500,
        });
      })

  }

  save() {
    if (this.currentMatchFixId == '' || this.currentMatchFixId == null || this.currentMatchFixId == undefined) {

      this.formSubmit();
      console.log(this.currentMatchFixId + "elkhweohofwrh");
    }
    else {
      this.updateMatchFix();
      window.location.reload();
    }
  }


  delete(matchFixingId: number) {
    if (
      confirm(`Are you sure you want to delete ?`)
    ) {
      this.matchFixService.deleteMatchFixingById(matchFixingId).subscribe(
        (data: any) => {
          alert(" Match Fixture deleted successfully.");
          window.location.reload();
        },
        (error) => {
          console.log(error);
          alert("Something went wrong");
        });
    }
  }

}
