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
   
}



