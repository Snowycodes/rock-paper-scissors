// Pseudo code

// Function declaration getComputerChoice
function getComputerChoice() {
    let result = "";
    // generate a random value, 1, 2, or 3. and put into variable
    let randomValue = Math.floor((Math.random() * 3) + 1);


    // Assign 1 to rock, 2 to paper, 3 to scissors.
    // print the selected value in the console.
    if (randomValue == 1) {

        result = "ROCK";

    } else if (randomValue == 2) {

        result = "PAPER";

    } else {

        result = "SCISSORS";

    }

    return result;
}

// Function to collect input, makes it uppercase so the input is always uniform
function playerSelection() {

    let input = prompt("Please enter rock/paper/scissors to play").toUpperCase();

    return input;
}


function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection) {
        
        //draw
    } else if(playerSelection === "ROCK" && computerSelection === "PAPER") {
        // you lose
    } else if(playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        //you win
    } else if(playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        //you lose
    }else if(playerSelection === "PAPER" && computerSelection === "ROCK") {
        //you win
    }else if(playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        //you lose
    } else if(playerSelection === "SCISSORS" && computerSelection === "PAPER" ) {
        //you win
    } else {
        console.log("invalid input")
    }





   
}



