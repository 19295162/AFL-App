import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../game';
import { Team } from "../team";
import { DataService } from '../data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games!: Game[];
  @Input() team!: Team;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {
    this.dataService.getGames().subscribe(temp => { 
      
      //Only get complete games
      var tempArr: Game[] = [];
      temp.forEach(element => {
        if(element.complete == 100) tempArr.push(element);
      });

      this.games = tempArr;
    });
  }

}
