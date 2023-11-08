import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playersArray: any;

  constructor(private http:HttpClient) { }

  // add new players
  public addPlayer(player:any){
    return this.http.post(`http://localhost:8080/cricket-app/player/addplayer`, player);
  }

  // fetch all players
  public fetchall(){
    return this.http.get(`http://localhost:8080/cricket-app/player/fetchallplayer`);
  }

  // delete player by id
  public deletePlayerById(playerId:number){
    return this.http.delete(`http://localhost:8080/cricket-app/player/delete/${playerId}`);
  }

  // edit player details by id
  // public updatePlayer(playerId:number){
  //   return this.http.get(`http://localhost:8080/cricket-app/player/update/${playerId}`);
  // }

}
