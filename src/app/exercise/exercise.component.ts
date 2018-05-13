import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Exercise, GymeGoer, Workout } from '../models/exercise'
import { ExerciseService } from '../services/exercise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  Model = new Exercise();
  Me: GymeGoer;
  private _api = "http://localhost:8080/exercise";

  constructor(
    private http: Http,
    private _Exercise: ExerciseService,
    private _Router: Router
  ) {
    this.Me = _Exercise.Me;
    if(!this.Me) {
      _Router.navigate(['/login']);
      return;
    }
    this.signin(this.Me.name);
    setInterval(()=> this.refresh(), 1000)
  }

  ngOnInit() {
  }

  refresh(){
    this.http.get(this._api + "/state")
      .subscribe(data=> this.Model = data.json())
  }

  signin(name: string){
    this.http.get(this._api + "/workouts", { params : { gymgoerId: name } })
    .subscribe(data=> this.Me.myExercises =  data.json() )
  }

  selectExercise(e: MouseEvent, text: string) {
    e.preventDefault();
    
    //coach doen't need to do any exercise or workout
    // if(this.myWorkoutExercise() || this.iAmTheCoach()) return;

    this.http.post(this._api + "/workouts", { text: text, gymgoerId: this.Me.name })
      .subscribe(data=> {
        if(data.json().success){
          this.Me.myExercises.splice( this.Me.myExercises.indexOf(text), 1 );
        }
      },err=> {
        console.log(err);
      }); 
  }

  myWorkoutExercise = () => this.Model.workoutExercises.find( x => x.gymgoerId == this.Me.name );
  chosenExercise = () => this.Model.workoutExercises.find( x => x.chosen );
  iAmTheCoach = () => this.Me.name == this.Model.coachId;

}
