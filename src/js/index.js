const cardData = [{
    "letter": "a",
    "exercise": "starJumps"
}, {
    "letter": "b",
    "exercise": "starJumps"
}, {
    "letter": "c",
    "exercise": "starJumps"
}, {
    "letter": "d",
    "exercise": "pushUps"
}, {
    "letter": "e",
    "exercise": "starJumps"
}, {
    "letter": "f",
    "exercise": "squats"
}, {
    "letter": "g",
    "exercise": "pushUps"
}, {
    "letter": "h",
    "exercise": "squats"
}, {
    "letter": "i",
    "exercise": "squats"
}, {
    "letter": "j",
    "exercise": "pushUps"
}, {
    "letter": "k",
    "exercise": "pushUps"
}, {
    "letter": "l",
    "exercise": "pushUps"
}, {
    "letter": "m",
    "exercise": "starJumps"
}, {
    "letter": "n",
    "exercise": "starJumps"
}, {
    "letter": "o",
    "exercise": "lunges"
}, {
    "letter": "p",
    "exercise": "pushUps"
}, {
    "letter": "q",
    "exercise": "squats"
}, {
    "letter": "r",
    "exercise": "pushUps"
}, {
    "letter": "s",
    "exercise": "pushUps"
}, {
    "letter": "t",
    "exercise": "squats"
}, {
    "letter": "u",
    "exercise": "lunges"
}, {
    "letter": "v",
    "exercise": "starJumps"
}, {
    "letter": "w",
    "exercise": "starJumps"
}, {
    "letter": "x",
    "exercise": "squats"
}, {
    "letter": "y",
    "exercise": "starJumps"
}, {
    "letter": "z",
    "exercise": "pushUps"
}];
//const cardData = [{"letter":"a","exercise":"lunges"},{"letter":"b","exercise":"pushUps"},{"letter":"c","exercise":"squats"},{"letter":"d","exercise":"squats"},{"letter":"e","exercise":"starJumps"}]
    //[{"letter":"a","exercise":"lunges"},{"letter":"b","exercise":"pushUps"},{"letter":"c","exercise":"squats"},{"letter":"d","exercise":"squats"},{"letter":"e","exercise":"starJumps"}]
    //require("./exerciseAssignments.json");

const postContainer = document.querySelector(".card-container");

function getExerciseForLetter(letter){
    let matchingCard = cardData.find(card => card.letter === letter);
    return matchingCard.exercise;
}

const randMultipleOfFive = () => (Math.floor(Math.random() * 5) + 1) * 5;
const postCard = (letter,exercise) => {
    const postElement = document.createElement("div");
    postElement.classList.add('card');
    postElement.innerHTML= `
        <h3 class="card-heading" id=${letter}>${letter.toUpperCase()}</h3>
        <p class="card-body">${randMultipleOfFive() + " " + exercise}</p>
        `
    postContainer.appendChild(postElement);
}
function showLetterCard(letter){
    const cards = document.querySelectorAll(`.card[id="${letter}"]`);
    cards.forEach(card =>{
        card.style.display = 'revert';
    });
}

const nameInput = document.getElementById("name");
nameInput.addEventListener("input",()=>{
    let inputValue = nameInput.value;
    
    postContainer.innerHTML = '';

    
    for(let i = 0; i < inputValue.length; i++){
        let currentLetter = inputValue[i].toLowerCase();
        let exercise = getExerciseForLetter(currentLetter);
        postCard(currentLetter,exercise);
        showLetterCard(currentLetter);
    }
});
document.getElementById('submit').addEventListener('click',()=>{
    nameInput.value = '';
    document.querySelectorAll('.card').forEach(card =>{
        card.style.display = 'none';
    })
})
