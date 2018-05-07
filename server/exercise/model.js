const exerciseStack = [
    "First Exercises",
    "Second Exercise",
    "Third Exercise",
    "Fourth Exercise",
    "Fifth Exercises"
];

var iCurrentExercise = 0;

var pictureStack = [];

var iCurrentPicture = 0;

function Exercise() {
    this.gymgoers = [];
    this.coachId = null;
    this.doneExercises = [];
    this.picture = null;

    this.getExercise = (gymgoerId) => {
        if(this.gymgoers.some(x=>x.gymgoerId == gymgoerId)){

        } else {
            this.gymgoers.push({ gymgoerId: gymgoerId, name: gymgoerId });
            return exerciseStack.slice(iCurrentExercise, iCurrentExercise += 1);
        }
        return exerciseStack.slice(iCurrentExercise, iCurrentExercise += 1);
    }

    this.selectExercise = (text, gymgoerId) => this.doneExercises.push({ text: text, gymgoerId: playerId });

    this.chooseExercise = text => {
        this.doneExercises.find(x=> x.text == text).chosen = true;
        this.coachId = this.gymgoers[this.coachId = (this.coachId + 1) % this.gymgoers.length ]
    }

}

module.exports = Exercise;