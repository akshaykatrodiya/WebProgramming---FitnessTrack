export class Exercise {

    gymgoers: GymeGoer[] = [];
    coachId: string;
    doneExercises: Workout[] = [];
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