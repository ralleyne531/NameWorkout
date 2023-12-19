const cardData = [{"letter":"a","exercise":"starJumps"},{"letter":"b","exercise":"pushUps"},{"letter":"c","exercise":"squats"},{"letter":"d","exercise":"pushUps"},{"letter":"e","exercise":"lunges"},{"letter":"f","exercise":"starJumps"},{"letter":"g","exercise":"lunges"},{"letter":"h","exercise":"pushUps"},{"letter":"i","exercise":"starJumps"},{"letter":"j","exercise":"pushUps"},{"letter":"k","exercise":"lunges"},{"letter":"l","exercise":"starJumps"},{"letter":"m","exercise":"lunges"},{"letter":"n","exercise":"squats"},{"letter":"o","exercise":"pushUps"},{"letter":"p","exercise":"lunges"},{"letter":"q","exercise":"lunges"},{"letter":"r","exercise":"lunges"},{"letter":"s","exercise":"starJumps"},{"letter":"t","exercise":"squats"},{"letter":"u","exercise":"starJumps"},{"letter":"v","exercise":"starJumps"},{"letter":"w","exercise":"squats"},{"letter":"x","exercise":"starJumps"},{"letter":"y","exercise":"lunges"},{"letter":"z","exercise":"starJumps"}]
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

nameInput = document.getElementById("name");
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
