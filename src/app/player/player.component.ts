import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../player';
import { DataService } from '../data.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players!: Player[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(): void {
    this.dataService.getPlayers().subscribe(temp => { this.players = temp; });
  }
}
