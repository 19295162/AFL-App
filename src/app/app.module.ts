import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewLeagueTableComponent } from './view-league-table/view-league-table.component';

import { HttpClientModule} from '@angular/common/http';
import { TeamComponent } from './team/team.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';
import { TipComponent } from './tip/tip.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewLeagueTableComponent,
    TeamComponent,
    GameComponent,
    PlayerComponent,
    TipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }