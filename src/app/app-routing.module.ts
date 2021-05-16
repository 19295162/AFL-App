import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLeagueTableComponent } from './view-league-table/view-league-table.component'; 
import { TeamComponent } from './team/team.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [ 
  { path: 'ViewLeagueTable', component: ViewLeagueTableComponent}, 
  { path: 'Team', component: TeamComponent},
  { path: 'Game', component: GameComponent},
  { path: 'Player', component: PlayerComponent}
 ];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
