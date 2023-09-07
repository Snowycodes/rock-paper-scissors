// Scoreboard global vars
let playerScore = 0;
let computerScore = 0;

// run game
game();

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

	// stub for testing. You can let the computer play vs. itself.
	// input = getComputerChoice();
	// --------- end stub

	return input;
}



// function that handles logic of a round of play
function playRound(playerSelection, computerSelection) {

	let result = "";

	console.log(`Computer used ${computerSelection} and player uses ${playerSelection}`);

	if (playerSelection === computerSelection) {

		result = "DRAW";
		console.log("It is a draw!")

	} else if (playerSelection === "ROCK" && computerSelection === "PAPER") {

		result = "Computer_WIN";
		console.log(` PAPER beats ROCK! You lose!`)

	} else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {

		result = "Player_WIN";
		console.log(`ROCK BEATS SCISSORS You win!`)

	} else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {

		result = "Computer_WIN";
		console.log(`SCISSORS beats PAPER! You lose!`)

	} else if (playerSelection === "PAPER" && computerSelection === "ROCK") {

		result = "Player_WIN";
		console.log(`PAPER beats ROCK You win!`)

	} else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {

		result = "Computer_WIN";
		console.log(`ROCK beats SCISSORS! You lose!`)

	} else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {

		result = "Player_WIN";
		console.log(`SCISSORS beats PAPER You win!`)

	} else {
		console.log("invalid player input")
		result = "INVALID_INPUT"
	}

	return result;
}


// function that runs games until best out of 5 is reached, 
// I decided not count draws and forfeit the round so you end up playing more than 5 rounds since drawing happens quite often in 5 tries.
function game() {

	console.log();


	while (parseInt(playerScore) + parseInt(computerScore) < 5) {

		if (playRound(playerSelection(), getComputerChoice()) == "Player_WIN") {

			playerScore++

		} else if (playRound(playerSelection(), getComputerChoice()) == "Computer_WIN") {

			computerScore++

		} else {

			// invalid input run again
		}

		if ((parseInt(playerScore) + parseInt(computerScore) < 5)) {

			console.log(`the score is player ${playerScore} computer ${computerScore}`)

		} else {

			console.log(`the final score is player ${playerScore} computer ${computerScore}`);
			if (parseInt(playerScore) > parseInt(computerScore)) {

				console.log("Congratulations, you win!")

			} else {

				console.log(":( you lose!")

			}
		}

	}

}