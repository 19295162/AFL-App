import { Component, OnInit } from '@angular/core';
import { Team } from '../team'; 
import { DataService } from '../data.service'; 
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  
  teams!: Team[];
  selectedTeam!: number;
  teamId!:number;
  
  constructor(private dataService: DataService, private router: Router, private userService: UserService) {}
  
  ngOnInit(): void {
    this.getTeams();
    this.userService.selectedTeam.subscribe(id => this.teamId = id);
  }

  onSelect(teamId: number): void {
    this.updateSelectedTeam(teamId);
  }
  
  getTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
  }

  updateSelectedTeam(teamId: number){
    this.selectedTeam = teamId;
    this.userService.changeTeam(teamId);
  }

  setSelected(){

  }

}
