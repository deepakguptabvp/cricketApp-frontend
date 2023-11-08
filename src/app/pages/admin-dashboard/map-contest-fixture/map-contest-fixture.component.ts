import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreatecontestService } from 'src/app/services/createcontest.service';
import { MapingContestFixtureService } from 'src/app/services/maping-contest-fixture.service';
import { MatchFixtureService } from 'src/app/services/match-fixture.service';

@Component({
  selector: 'app-map-contest-fixture',
  templateUrl: './map-contest-fixture.component.html',
  styleUrls: ['./map-contest-fixture.component.css']
})
export class MapContestFixtureComponent implements OnInit {

  MappingContestArray: any = [];
  ContestArray: any = [];
  TeamArray: any;
  mapcontestfixturedata: any;
  contests: any;

  public mapContestData = {
    "matchId": "",
    "matchName": "",
    "contestId": "",
    "contestName": ""
  }

  constructor(private matchFixService: MatchFixtureService, private createContestService: CreatecontestService, private mapContestFixtureService: MapingContestFixtureService, private snack: MatSnackBar) { }


  ngOnInit(): void {
    this.mapContestFixture();
    this.matchFix();
    this.createContest();
  }


  alreadyMappedContestFixture: any[] | undefined;
  filteredContestId: any[] | undefined;
  filteredContests: any[] | undefined;
  clicked1(event: MatSelectChange) {

    // get the selected matchid from select option
    const selectedMatchId = event.value;
    //console.log(`Selected Match Id : ${selectedMatchId}`);

    // find all the connected (already mapped) contestid with that selected matchid
    this.alreadyMappedContestFixture = this.MappingContestArray.filter((item: { matchId: any; }) => item.matchId === selectedMatchId);
    //console.log("matchfixture data of selected match : ")
     //console.log(this.alreadyMappedContestFixture);

     console.log("contests id of already mapped contest with selected id :")
    this.filteredContestId = this.alreadyMappedContestFixture?.map(item => item.contestId);
    console.log(this.filteredContestId);


    // filter out the rest contestid and display it to the contest select option
    this.filteredContests = this.ContestArray.filter((c: { id: any; }) => !this.filteredContestId?.includes(c.id));
    // console.log("Filtered Contests : ");
     console.log(this.filteredContests);

  }


  mapContestFixture() {
    this.mapContestFixtureService.fetchAllMapingContestFixture().subscribe((data: any) => {
      this.MappingContestArray = data;
      console.log("asdfasdf")
      console.log(this.MappingContestArray);
     
    })
  }

  matchFix() {
    this.matchFixService.fetchAllMatchFixtures().subscribe((data: any) => {
      this.TeamArray = data;
      console.log(this.TeamArray);
    })
  }

  createContest() {
    this.createContestService.fetchall().subscribe((data: any) => {
      this.ContestArray = data;
      console.log(this.ContestArray);
    })
  }


  formSubmit() {

    // if (this.mapContestData.matches == '' || this.mapContestData.matches == null) {
    //   alert("Match name is required !");
    //   return;
    // }

    // if (this.mapContestData.contestName == '' || this.mapContestData.contestName == null) {
    //   alert("Contest Name is required !");
    //   return;
    // }

    console.log(this.mapContestData);


    this.mapContestFixtureService.addMapingContestFixture(this.mapContestData).subscribe(
      (data: any) => {
        // console.log("ddpkkkkkkkkkkk")
        console.log(data);
        alert("New Mapping Contest Fixture added successfully...");
        window.location.reload();
      },
      (error) => {
        console.log(error);
        this.snack.open('Something went wrong', 'okay', {
          duration: 2000
        });
      })

  }


  delete(mapingContestFixtureId: number) {
    if (
      confirm(`Are you sure you want to delete ?`)
    ) {
      this.mapContestFixtureService.deleteMapingContestFixtureById(mapingContestFixtureId).subscribe(
        (data: any) => {
          alert("Maping Contest Fixture deleted successfully.");
          window.location.reload();
        },
        (error) => {
          console.log(error);
          alert("Something went wrong");
        });
    }
  }

}