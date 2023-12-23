let exercises = Object.keys(require("./workouts.json"));
const fs = require("fs");
const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];


const exerciseList = [];
alphabet.forEach( (letter) => exerciseList.push([letter, exercises[Math.floor(Math.random()* (exercises.length))]]));
console.log(exerciseList);



let data = [];

for (i=0; i <26 ; i++){
    data.push({letter: exerciseList[i][0], exercise: exerciseList[i][1]});
}
fs.writeFile ("exerciseAssignments.json", JSON.stringify(data, null,1), function(err) {
        if (err) throw err;
        console.log('complete');
    }
)

/*let exTest = require("./exerciseAssignments.json");
console.log((exTest));*/