import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  constructor(private http: HttpClient) { }

  // fetch all game rules
  public fetchAllRules() {
    return this.http.get(`http://localhost:8080/cricket-app/gamerules`);
  }

}
