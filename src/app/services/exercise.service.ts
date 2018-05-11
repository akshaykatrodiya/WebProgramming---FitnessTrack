import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GymeGoer } from '../models/exercise';
import { Router } from '@angular/router';

@Injectable()
export class ExerciseService {

  Me: GymeGoer;
  token: string;
  pic: string;

  constructor(
    private http: Http,
    private _Router: Router
  ) {
      
  }

  login(name: string, password: string){
    if(password == '1234'){
      // Log the user in
      this.Me = { name: name, myExercises: [] };
      this._Router.navigate(['/exercise']);
    }
  }

  oAuthLogin(name: string, token:string, pic: string){
      this.Me = { name: name, myExercises: [] };
      this.pic = pic;
      this.token = token;
      this._Router.navigate(['/exercise']);
  }

}
