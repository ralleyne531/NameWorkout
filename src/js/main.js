let exercises = Object.keys(require("./workouts.json"));
const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
console.log(alphabet);


const exerciseList = [];
alphabet.forEach( (letter) => exerciseList.push([letter, exercises[Math.floor(Math.random()* (exercises.length))]]));
console.log(exerciseList);
