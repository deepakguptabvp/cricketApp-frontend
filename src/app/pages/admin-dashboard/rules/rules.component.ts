import { Component, OnInit } from '@angular/core';
import { RulesService } from 'src/app/services/rules.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  gameRules: any;

  constructor(private rulesService: RulesService) { }

  ngOnInit(): void {
    this.loadGameRules();
  }

  loadGameRules() {
    this.rulesService.fetchAllRules().subscribe(
      (data: any) => {
        this.gameRules = data;
        console.log(this.gameRules);
      },
      (error) => {
        console.log(error);
      })
  }

}
