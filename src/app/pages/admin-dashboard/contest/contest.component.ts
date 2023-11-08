import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreatecontestService } from 'src/app/services/createcontest.service';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.css']
})
export class ContestComponent implements OnInit {

  PlayerArray: any[] = [];

  currentContestId = "";

  contestData = {
    name: "",
    prizeMoney: "",
    entryFee: "",
    minSize: "",
    maxSize: "",
    rank1: "",
    rank2: "",
    rank3: ""
  }

  constructor(private createContestService: CreatecontestService, private snack: MatSnackBar, private http: HttpClient) { }

  ngOnInit(): void {
    this.createContestService.fetchall().subscribe((data: any) => {
      this.PlayerArray = data;
      // console.log(this.PlayerArray);
    })
  }


  formSubmit() {

    if (this.contestData.name == '' || this.contestData.name == null) {
      alert("Contest name is required !");
      return;
    }

    if (this.contestData.entryFee == '' || this.contestData.entryFee == null) {
      alert("Entry fee is required !");
      return;
    }

    if (this.contestData.prizeMoney == '' || this.contestData.prizeMoney == null) {
      alert("Prize money is required !");
      return;
    }

    if (this.contestData.minSize == '' || this.contestData.minSize == null) {
      alert("Min size is required !");
      return;
    }

    if (this.contestData.maxSize == '' || this.contestData.maxSize == null) {
      alert("Max size is required !");
      return;
    }


    console.log(this.contestData);
    this.createContestService.addCreateContest(this.contestData).subscribe(
      (data: any) => {
        // console.log("ddpkkkkkkkkkkk")
        console.log(data);
        alert("New Contest created successfully...");
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
    this.contestData.name = data.name;
    this.contestData.entryFee = data.entryFee;
    this.contestData.prizeMoney = data.prizeMoney;
    this.contestData.minSize = data.minSize;
    this.contestData.maxSize = data.maxSize;
    this.contestData.rank1 = data.rank1;
    this.contestData.rank2 = data.rank2;
    this.contestData.rank3 = data.rank3;
    this.currentContestId = data.id;
  }

  updateContest() {
    let bodyData = {
      "name": this.contestData.name,
      "entryFee": this.contestData.entryFee,
      "prizeMoney": this.contestData.prizeMoney,
      "minSize": this.contestData.minSize,
      "maxSize": this.contestData.maxSize,
      "rank1": this.contestData.rank1,
      "rank2": this.contestData.rank2,
      "rank3": this.contestData.rank3
    };

    this.http.put("http://localhost:8080/cricket-app/createcontest/update-createcontest/" + this.currentContestId, bodyData).subscribe(
      (data) => {
        alert("Contest data updated successfully..");
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
    if (this.currentContestId == '' || this.currentContestId == null || this.currentContestId == undefined) {
      this.formSubmit();
      console.log(this.currentContestId);
    }
    else {
      this.updateContest();
      window.location.reload();
    }
  }     


  delete(currentContestId: number) {
    if (
      confirm(`Are you sure you want to delete ?`)
    ) {
      this.createContestService.deleteCreateContestById(currentContestId).subscribe(
        (data: any) => {
          alert("Contest deleted successfully.");
          window.location.reload();
        },
        (error) => {
          console.log(error);
          alert("Something went wrong");
        });
    }
  }
   
}
