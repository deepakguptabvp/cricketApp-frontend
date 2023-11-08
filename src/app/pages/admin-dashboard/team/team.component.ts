import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  TeamArray: any[] = [];

  teamData = {
    name: "",
    logo: ""
  }

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.fetchall().subscribe((data: any) => {
      this.TeamArray = data;
    })
  }

  formSubmit() {

    if (this.teamData.name == '' || this.teamData.name == null) {
      alert("Team Name is required !");
      return;
    }

    if (this.teamData.logo == '' || this.teamData.logo == null) {
      alert("Team Logo is required !");
      return;
    }

    this.teamService.addTeam(this.teamData).subscribe(
      (data: any) => {
        alert("Team country added successfully");
        console.log(data);
        window.location.reload();
        // alert('Team Created Successfully');
      },
      (error) => {
        console.log(error);
        alert("Something went wrong");
      })

  }


  deleteTeam(teamId: number) {
    this.teamService.deleteTeamById(teamId).subscribe(
      (data: any) => {
        alert(this.teamData.name + " Team deleted successfully."+ this.teamData.name);
        window.location.reload();
      },
      (error) => {
        console.log(error);
        alert("Something went wrong");
      })
  }



}
