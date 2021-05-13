import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../team'; 
import { DataService } from '../data.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  
  teams!: Team[];
  selectedTeam!: number;
  
  constructor(private dataService: DataService, private router: Router) {}
  
  ngOnInit(): void {
    this.getTeams();
  }

  onSelect(teamId: number): void {
    this.selectedTeam = teamId;
    this.router.navigateByUrl('./game');
  }
  
  getTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
  }
}
