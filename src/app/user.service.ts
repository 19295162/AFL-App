import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private teamSource = new BehaviorSubject<number>(100);
  selectedTeam = this.teamSource.asObservable();

  constructor() { }

  changeTeam(id : number){
    this.teamSource.next(id);
  }
}
