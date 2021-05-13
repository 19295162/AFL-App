import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tip } from '../tip';
import { Standing } from '../standing';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-league-table',
  templateUrl: './view-league-table.component.html',
  styleUrls: ['./view-league-table.component.css']
})
export class ViewLeagueTableComponent implements OnInit {

  
  tips!: Tip[];
  standings!: Standing[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getTips();
    this.getStandings();
  }

  getTips(): void {
    this.dataService.getTips().subscribe(temp => { this.tips = temp; });
  }

  getStandings(): void {
    this.dataService.getStandings().subscribe(temp => { this.standings = temp; });
  }
}