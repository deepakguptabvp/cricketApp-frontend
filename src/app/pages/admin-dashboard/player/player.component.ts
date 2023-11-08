import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  PlayerArray: any[] = [];
  TeamArray: any;

  currentPlayerId = "";

  playerData = {
    player_name: "",
    team_name: "",
    player_skills: "",
    player_points: ""
  }

  constructor(private teamService: TeamService, private playerService: PlayerService, private snack: MatSnackBar, private http: HttpClient) { }

  ngOnInit(): void {
    this.playerService.fetchall().subscribe((data: any) => {
      this.PlayerArray = data;
      // console.log(this.PlayerArray);
    })

    this.teamService.fetchall().subscribe((data: any) => {
      this.TeamArray = data;
      // console.log(this.TeamArray);
    })
  }


  formSubmit() {
    // console.log(this.playerData + "elirhohrowhforwhfoho");

    if (this.playerData.player_name == '' || this.playerData.player_name == null) {
      alert("Player Name is required !");
      return;
    }

    if (this.playerData.team_name == '' || this.playerData.team_name == null) {
      alert("Team Name is required !");
      return;
    }

    if (this.playerData.player_skills == '' || this.playerData.player_skills == null) {
      alert("Player Skills is required !");
      return;
    }

    if (this.playerData.player_points == '' || this.playerData.player_points == null) {
      alert("Player points is required !");
      return;
    }

    console.log(this.playerData)
    this.playerService.addPlayer(this.playerData).subscribe(
      (data: any) => {
        console.log("helloeeeeee");
        alert("Player added successfully");
        console.log(data);
        window.location.reload();
      },
      (error) => {
        console.log(error + "byeeeeeeeeeeeeeeeeee");
        this.snack.open('Something went wrong', 'okay', {
          duration: 2000
        });
      })

  }


  edit(data: any) {
    this.playerData.player_name = data.player_name;
    this.playerData.team_name = data.team_name;
    this.playerData.player_skills = data.player_skills;
    this.playerData.player_points = data.player_points;
    this.currentPlayerId = data.id;
  }

  updatePlayer() {
    let bodyData = {
      "player_name": this.playerData.player_name,
      "team_name": this.playerData.team_name,
      "player_skills": this.playerData.player_skills,
      "player_points": this.playerData.player_points
    };

    this.http.put("http://localhost:8080/cricket-app/player/update/" + this.currentPlayerId, bodyData).subscribe(
      (data) => {
        console.log(data);
        alert("Player data updated successfully..");
      }, (error) => {
        console.log('Fail');
        console.log(error);
        this.snack.open('Invalid Details !! Try again', 'okay', {
          duration: 1500,
        });
      })

  }


  save() {
    // console.log("asdf")
    if (this.currentPlayerId == '' || this.currentPlayerId == null || this.currentPlayerId == undefined) {

      this.formSubmit();
      console.log(this.currentPlayerId + "efrwwwggrrrrrrr");
    }
    else {
      this.updatePlayer();
      window.location.reload();
    }
  }


  // delete player by id
  delete(playerId: number) {
    if (
      confirm(`Are you sure you want to delete ?`)
    ) {
      this.playerService.deletePlayerById(playerId).subscribe(
        (data: any) => {
          alert(" Player deleted successfully.");
          window.location.reload();
        },
        (error) => {
          console.log(error);
          alert("Something went wrong");
        });
    }
  }


}


