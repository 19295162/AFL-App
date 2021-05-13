import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Team } from './team';
import { Tip } from './tip';
import { Game } from './game';
import { Standing } from './standing';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get('https://api.squiggle.com.au/?q=teams').pipe(map((data: any) => data.teams.map((item: any) =>
      new Team(
        item.name,
        item.logo,
        item.id,
        item.abbrev)
    )))
  }

  getGames(): Observable<Game[]> {
    return this.http.get('https://api.squiggle.com.au/?q=games;year=2021').pipe(map((data: any) => data.games.map((item: any) => 
      new Game(
        item.is_grand_final,
        item.hbehinds,
        item.abehinds,
        item.hteam,
        item.round,
        item.hgoals,
        item.winnerteamid,
        item.ateamid,
        item.is_final,
        item.venue,
        item.date,
        item.year,
        item.complete,
        item.ascore,
        item.tz,
        item.updated,
        item.agoals,
        item.id,
        item.ateam,
        item.winner,
        item.hscore,
        item.hteamid,
        item.roundname,
        item.localtime)
    )))
  }


  getTips(): Observable<Tip[]> {
    return this.http.get('https://api.squiggle.com.au/?q=tips;year=2021').pipe(map((data: any) => data.tips.map((item: any) => 
      new Tip(
        item.tip,
        item.round,
        item.ateamid,
        item.venue,
        item.correct,
        item.date,
        item.margin,
        item.err,
        item.hteam,
        item.tipteamid,
        item.source,
        item.confidence,
        item.ateam,
        item.bits,
        item.hteamid,
        item.sourceid,
        item.year,
        item.updated,
        item.confidence,
        item.gameid,
        item.hmargin)
    )))
  }

  getStandings(): Observable<Standing[]> {
    return this.http.get('https://api.squiggle.com.au/?q=standings;year=2021').pipe(map((data: any) => data.standings.map((item: any) => 
      new Standing(
        item.id,
        item.g_against,
        item.behinds_for,
        item.played,
        item.behinds_against,
        item.wins,
        item.rank,
        item.draws,
        item.name,
        item.g_for,
        item.goals_against,
        item.goals_for,
        item.pts,
        item.losses,
        item.percentage)
    )))
  }

  getPlayers(): Observable<Player[]> {
    return this.http.get('https://api.squiggle.com.au/?q=pav').pipe(map((data: any) => data.pav.map((item: any) =>
      new Player(
        item.games,
        item.PAV_total,
        item.PAV_total_rank,
        item.mPAV_rank,
        item.PAV_off,
        item.mPAV_off,
        item.mPAV_def,
        item.PAV_def,
        item.per_of_team_games,
        item.PAV_mid_rank,
        item.name,
        item.PAV_mid,
        item.PAV_def_rank,
        item.mPAV_mid,
        item.team,
        item.PAV_off_rank,
        item.pavid,
        item.surname,
        item.firstname,
        item.mPAV_total,
        item.year)
    )))
  }
}
