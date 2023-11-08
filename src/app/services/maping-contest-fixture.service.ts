import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapingContestFixtureService {
  
  constructor(private http:HttpClient) { }

    // add new maping contest fixture
    public addMapingContestFixture(mapingcontestfixture:any){
      return this.http.post(`http://localhost:8080/cricket-app/mapingcontestfixture/add-mapingcontestfixture`, mapingcontestfixture);
    }
  
    // fetch all maping contest fixture
    public fetchAllMapingContestFixture(){
      return this.http.get(`http://localhost:8080/cricket-app/mapingcontestfixture/fetchall-mapingcontestfixture`);
    }
  
    // delete maping contest fixture by id
    public deleteMapingContestFixtureById(mapingContestFixtureId:number){
      return this.http.delete(`http://localhost:8080//cricket-app/mapingcontestfixture/delete-mapingcontestfixture/${mapingContestFixtureId}`);
    }

}
