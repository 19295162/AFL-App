import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { DataService } from '../data.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players!: Player[];
  teamId!: number;

  constructor(private dataService: DataService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.selectedTeam.subscribe(data => {
      if(data !== this.teamId){
        this.teamId = data;
        this.getPlayers();
      }
    });
  }

  getPlayers(): void {
    this.dataService.getPlayers().subscribe(temp => {

      //Display players of the selected team
      var tempArr: Player[] = [];
      temp.forEach(element => {
      if(element.team == this.teamId) tempArr.push(element);
      });

    this.players = tempArr;
  });
  }
}
