export class Exercise {
    workoutExercises: Workout[] = [
        {exerciseName: "Push-ups", description: "3 Sets of 20, 15, 10 Reps", gymgoerName: "Akshay Katrodiya", chosen: false},
        {exerciseName: "Barbell Bench Press", description: "3 Sets of 15, 10, 5 Reps", gymgoerName: "Dil Katrodiya", chosen: false},
        {exerciseName: "Cardio", description: "15 Minutes", gymgoerName: "Divi Patel", chosen: false}
    ];
    
    gymgoers: GymeGoer[] = [
        { name: 'Akshay Katrodiya'},
        { name: 'Dil Katrodiya'},
        { name: 'Divi Patel'},
    ];

    doneExercises: Workout[] = [];

    Coach: string = 'Guru Mann';
    picture: string = '../../assets/images/Guru-Mann.jpg';
}

export class GymeGoer {
    name: string;
}

export class Workout {

    exerciseName: string;
    description: string;
    gymgoerName: string;
    chosen: boolean = false; 
}