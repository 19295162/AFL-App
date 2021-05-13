import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../game';
import { Team } from "../team";
import { Tip } from "../tip";
import { DataService } from '../data.service';
import { TeamComponent } from '../team/team.component';
import { UserService } from '../user.service';
import { element } from 'protractor';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games!: Game[];
  teamId!: number;
  selectedGame!: Game;


  constructor(private dataService: DataService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.selectedTeam.subscribe(id => this.teamId = id);
    this.getGames();
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
  }

  getGames(): void {
    this.dataService.getGames().subscribe(temp => { 
      
      if(this.teamId == 100) {
        //Get all games
        var tempArr: Game[] = [];
        temp.forEach(element => {tempArr.push(element);});
      }
      else {
        //Display games for the selected team
        var tempArr: Game[] = [];
        temp.forEach(element => {
        if(element.hteamid == this.teamId || element.ateamid == this.teamId) tempArr.push(element);
        });
      }
      
      this.games = tempArr;
    });
  }
}
