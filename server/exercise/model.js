// list of all workout Exercises
const exerciseStack = [
    "Barbell Press",
    "DB Press & DB Fly",
    "Barbell Shrugs",
    "High Angle Cable Curl",
    "Bench Dips",
    "Close Grip Machine Rows",
    "Hyper Back Extension",
    "DB Side Raise",
    "Laying Rear Delt Fly",
    "Wide Grip Barbell Pull Down",
    "Heck Squat",
    "Leg Presses",
    "Barbell Step-ups",
    "Walking Lunges with Squat",
    "Cardio",
    "Stationary Bike",
    "Crunches on Lat Machine",
    "Side to Side Twist",
    "Incline Crunches with Twist",
    "Flutter Kicks",
    "Rope Lat Pull Down",
    "Biceps 21 & Triceps 21"
];

var iCurrentExercise = 0;

var pictureStack = [];

var iCurrentPicture = 0;

function Exercise() {
    this.gymgoers = [];
    this.coachId = null;
    this.workoutExercises = [];
    this.type = null;

    this.getExercise = (gymgoerId) => {
        if(this.gymgoers.some(x=>x.gymgoerId == gymgoerId)){

        } else {
            this.gymgoers.push({ gymgoerId: gymgoerId, name: gymgoerId });
            // return exerciseStack.slice(iCurrentExercise, iCurrentExercise);
        }
        return exerciseStack.slice(iCurrentExercise, exerciseStack.length);
    }

    this.selectExercise = (text, gymgoerId) => this.workoutExercises.push({ text: text, gymgoerId: gymgoerId });

    // this.chooseExercise = text => {
    //     this.doneExercises.find(x=> x.text == text).chosen = true;
    //     this.coachId = this.gymgoers[this.coachId = (this.coachId + 5) % this.gymgoers.length ]
    // }

}

module.exports = Exercise;