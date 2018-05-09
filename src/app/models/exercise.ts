export class Exercise {

    gymgoers: GymeGoer[] = [];
    coachId: string;
    workoutExercises: Workout[] = [];
    type: string;
}

export class GymeGoer {
    name: string;
    myExercises: string[];
}

export class Workout {

    text: string;
    gymgoerId: string;
    chosen: boolean = false; 
}