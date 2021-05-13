import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Standing } from '../standing';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-league-table',
  templateUrl: './view-league-table.component.html',
  styleUrls: ['./view-league-table.component.css']
})
export class ViewLeagueTableComponent implements OnInit {

  standings!: Standing[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getStandings();
  }

  getStandings(): void {
    this.dataService.getStandings().subscribe(temp => { this.standings = temp; });
  }
}