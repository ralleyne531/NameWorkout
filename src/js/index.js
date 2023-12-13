const cardData = [{"letter":"a","exercise":"lunges"},{"letter":"b","exercise":"pushUps"},{"letter":"c","exercise":"squats"},{"letter":"d","exercise":"squats"},{"letter":"e","exercise":"starJumps"}]
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