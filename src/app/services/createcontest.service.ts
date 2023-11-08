import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreatecontestService {

  constructor(private http: HttpClient) { }

  // add create contest for users
  public addCreateContest(createContest: any) {
    return this.http.post(`http://localhost:8080/cricket-app/createcontest/add-createcontest`, createContest);
  }

  // fetchall create contest
  public fetchall() {
    return this.http.get('http://localhost:8080/cricket-app/createcontest/fetchall-createcontest');
  }

  // delete create contest by id
  public deleteCreateContestById(createContestId: number) {
    return this.http.delete(`http://localhost:8080/cricket-app/createcontest/delete-createcontest/${createContestId}`);
  }
}
