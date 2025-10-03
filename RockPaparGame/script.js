console.log("Js loaded");

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".gameBtn");
let output = document.querySelector(".outputMessage p");
let userPoint = document.querySelector("#userScore");
let compPoint = document.querySelector("#compScore");

const generateComputerChoice = () => {
    const options =["rock" , "paper" , "sei"];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const playGame = (userChoice) => {
    console.log("User choice = ",userChoice);
    // generate computer choice

    const compChoice = generateComputerChoice();
    console.log("Computer Choice",compChoice);

    //  logic of the game


    if(userChoice === compChoice) {
        console.log("It's a draw");
        output.innerText = "It's a draw!";
        output.style.backgroundColor = "#34495e";
    }
    else {
        let userWin = true;

        if(userChoice === "rock") {
            userWin = compChoice === "sei" ? true : false;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "rock" ? true : false;
        }
        else if(userChoice === "sei") {
            userWin = compChoice === "paper" ? true : false;
        }

        winner(userWin);
    }



}

const winner = (userWin) => {
    if(userWin === true)
    {
        output.innerText = "User is the Winner";
        output.style.backgroundColor = "green";
        userScore++;
        userPoint.innerText = userScore;
    }
    else{
        output.innerText = "Computer is the Winner";
        output.style.backgroundColor = "red";
        compScore++;
        compPoint.innerText = compScore;
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    const userChoice = choice.getAttribute("id"); //  getting id of the Attribute
    choice.addEventListener("click", () => {
        playGame(userChoice);
    });
});
