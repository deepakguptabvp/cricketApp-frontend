import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {

  PlayerArray: any[] = [];
  weeketKeeperArray: any[] = [];
  batterArray: any[] = [];
  allrounderArray: any[] = [];
  bowlerArray: any[] = [];
  newArray: any[] = [];
  newFinalArray: any[] = [];
  wKArray: any[] = [];
  PlayerArrayStatus = false;
  PlayerArrayWKStatus = false;
  sum = 0;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.fetchall().subscribe((data: any) => {
      this.PlayerArray = data;
      
      this.batterArray = data.filter((obj: any) => {
        return obj.player_skills === 'Batsman';
      });

      this.bowlerArray = data.filter((obj: any) => {
        return obj.player_skills === 'Bowler';
      });

      this.weeketKeeperArray = data.filter((obj: any) => {
        return obj.player_skills === 'Wicketkeeper';
      });

      this.allrounderArray = data.filter((obj: any) => {
        return obj.player_skills === 'All rounder';
      });
      console.log(data + "ekjfhewkfwkr");
      console.log(this.PlayerArray);
    })
  }


  add(PlayerItem: any) {
    this.newArray.push(PlayerItem);
    this.newFinalArray = [...new Set(this.newArray)];
    console.log(this.newFinalArray, "dehfefwrif");
    this.wicketKeeperPick();
    this.maxPlayer();
    this.playerPointsMethod();
  }

  remove(PlayerItem: any) {
    this.newFinalArray.splice(PlayerItem, 1);
    this.wicketKeeperPick();
    this.maxPlayer();
    this.playerPointsMethod();
  }

  // only wicket keeper
  wicketKeeperPick() {
    const foundObject = this.newFinalArray.filter(
      (obj) => obj.player_skills === "Wicket keeper"
    );
    this.wKArray = [...new Set(foundObject)];
    // console.log(this.wKArray, '445yrekwejk');
    // console.log(this.newFinalArray, 'urueirieie');
    // console.log(foundObject);

    if (this.wKArray.length === 0) {
      this.PlayerArrayWKStatus = true;
    } else {
      this.PlayerArrayWKStatus = false;
    }
  }

  maxPlayer() {
    if (this.newFinalArray.length === 10) {
      this.PlayerArrayStatus = false;
    } else {
      this.PlayerArrayStatus = true;
    }
  }

  playerPointsMethod() {
    this.sum = this.newFinalArray.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue.player_points;
      },
      0
    );
  }

  

}

