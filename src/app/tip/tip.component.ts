import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Tip } from '../tip';
import { Game } from "../game";
import { DataService } from '../data.service';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit {

  tips!: Tip[];
  @Input() game!: Game;

  constructor(private dataService: DataService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['game']) {
      this.getTips();
    }
  }

  ngOnInit(): void {
  }

  getTips(): void {
    this.dataService.getTips().subscribe(temp => { 
      var tempArr: Tip[] = [];

      temp.forEach(element => {
        if(element.gameid == this.game.id) tempArr.push(element);
      });
      
      this.tips = tempArr;
    });
  }

}
