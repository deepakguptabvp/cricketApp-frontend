import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchFixtureService {

  constructor(private http: HttpClient) { }

  allFixtures: any;

  // add new players
  public addMatchFixture(matchFixing: any) {
    return this.http.post(`http://localhost:8080/cricket-app/matchfixing/add-matchfixtures`, matchFixing);
  }

  // fetch all players
  public fetchAllMatchFixtures() {
    return this.http.get(`http://localhost:8080/cricket-app/matchfixing/fetchall-matchfixtures`);
  }

  // delete player by id
  public deleteMatchFixingById(matchFixingId: number) {
    return this.http.delete(`http://localhost:8080/cricket-app/matchfixing/delete-matchfixtures/${matchFixingId}`);
  }

  // all fixtures
  
}
