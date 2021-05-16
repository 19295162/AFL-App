import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { DataService } from '../data.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games!: Game[];
  teamId!: number;
  selectedGame!: Game;
  gameId!: number;

  constructor(private dataService: DataService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.selectedTeam.subscribe(data => {
      if(data !== this.teamId){
        this.teamId = data;
        this.getGames();
      }
    });
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
    this.gameId = this.selectedGame.id;
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
