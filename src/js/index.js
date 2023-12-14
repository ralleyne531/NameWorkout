const cardData = [{"letter":"a","exercise":"starJumps"},{"letter":"b","exercise":"pushUps"},{"letter":"c","exercise":"squats"},{"letter":"d","exercise":"pushUps"},{"letter":"e","exercise":"lunges"},{"letter":"f","exercise":"starJumps"},{"letter":"g","exercise":"lunges"},{"letter":"h","exercise":"pushUps"},{"letter":"i","exercise":"starJumps"},{"letter":"j","exercise":"pushUps"},{"letter":"k","exercise":"lunges"},{"letter":"l","exercise":"starJumps"},{"letter":"m","exercise":"lunges"},{"letter":"n","exercise":"squats"},{"letter":"o","exercise":"pushUps"},{"letter":"p","exercise":"lunges"},{"letter":"q","exercise":"lunges"},{"letter":"r","exercise":"lunges"},{"letter":"s","exercise":"starJumps"},{"letter":"t","exercise":"squats"},{"letter":"u","exercise":"starJumps"},{"letter":"v","exercise":"starJumps"},{"letter":"w","exercise":"squats"},{"letter":"x","exercise":"starJumps"},{"letter":"y","exercise":"lunges"},{"letter":"z","exercise":"starJumps"}]
    //[{"letter":"a","exercise":"lunges"},{"letter":"b","exercise":"pushUps"},{"letter":"c","exercise":"squats"},{"letter":"d","exercise":"squats"},{"letter":"e","exercise":"starJumps"}]
    //require("./exerciseAssignments.json");

const postContainer = document.querySelector(".card-container");

const postMethods = () => {
    cardData.forEach((postData) => {
        const postElement = document.createElement("div");
        postElement.classList.add('card');
        postElement.innerHTML= `
        <h3 class="card-heading" id=${postData.letter}>${postData.letter}</h3>
        <p class="card-body">${postData.exercise}</p>
        `
        postContainer.appendChild(postElement);
    })
}

postMethods()