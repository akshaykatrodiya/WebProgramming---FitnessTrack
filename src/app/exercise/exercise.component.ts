import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Exercise, GymeGoer, Workout } from '../models/exercise'

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  Model = new Exercise();
  Me = new GymeGoer();
  private _api = "http://localhost:8080/exercise";

  constructor(private http: Http) {
    http.get(this._api + "/exercise", { params : { gymgoerId: this.Me.name } }).subscribe(data=> this.Me.myExercises = data.json()) 
    setInterval(()=> this.refresh(), 1000)
  }

  ngOnInit() {
  }

  refresh(){
    this.http.get(this._api + "/state")
      .subscribe(data=> this.Model = data.json())
  }
  
  selectExercise(e: MouseEvent, text: string) {
    e.preventDefault();
    if(this.myExercise()) return;

    this.http.post(this._api + "/exercise", { text: text, gymgoerId: this.Me.name })
      .subscribe(data=> {
        if(data.json().success){
          this.Me.myExercises.splice( this.Me.myExercises.indexOf(text), 1 );
        }
      }); 
  }

  myExercise = () => this.Model.doneExercises.find( x => x.gymgoerId == this.Me.name );
  chosenExercise = () => this.Model.doneExercises.find( x => x.chosen );
  iAmTheCoach = () => this.Me.name == this.Model.coachId;

}
