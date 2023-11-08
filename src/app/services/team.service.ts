import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  // add new team 
  public addTeam(team: any) {
    return this.http.post(`http://localhost:8080/cricket-app/team/addteam`, team);
  }

  // fetch all teams
  public fetchall(){
    return this.http.get(`http://localhost:8080/cricket-app/team/fetchallteams`);
  }

  // delete team by id
  public deleteTeamById(teamId:number){
    return this.http.delete(`http://localhost:8080/cricket-app/team/delete/${teamId}`);
  }
}    
