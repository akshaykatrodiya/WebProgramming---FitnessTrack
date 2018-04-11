import { Component, OnInit } from '@angular/core';
import { Exercise, GymeGoer, Workout } from '../models/exercise'

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  constructor() { }

  Model = new Exercise();
  Me = new GymeGoer();

  ngOnInit() {
  }

  exerciseDone(e: MouseEvent, w:Workout) {
    e.preventDefault();
    this.Model.doneExercises.push({ exerciseName: w.exerciseName, description: "Done", gymgoerName: w.gymgoerName, chosen: false });
    this.Model.workoutExercises.splice( this.Model.workoutExercises.indexOf(w), 1 );
  }

}
