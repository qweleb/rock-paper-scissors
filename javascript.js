let gamesPlayed = 0;
let playerScore = 0;
let computerScore = 0;

function selectPlayerChoice(selection) {
	let playerChoice = selection;
	return playerChoice;
}

function selectComputerChoice() {
	let computerChoiceID = Math.floor(Math.random() * (3 - 1 + 1) + 1);
	if (computerChoiceID == 1) {
		console.log("Computer picked Rock");
		return "rock;";
	} else if (computerChoiceID == 2) {
		console.log("Computer picked Paper");
		return "paper";
	} else if (computerChoiceID == 3) {
		console.log("Computer picked Scissors");
		return "scissors";
	}
}

function decideWinner(playerChoice, computerChoice) {
	if (
		(playerChoice == "rock" && computerChoice == "scissors") ||
		(playerChoice == "paper" && computerChoice == "rock") ||
		(playerChoice == "scissors" && computerChoice == "paper")
	) {
		updateScoreboard("player");
		console.log("You win!");
	} else if (
		(playerChoice == "rock" && computerChoice == "paper") ||
		(playerChoice == "paper" && computerChoice == "scissors") ||
		(playerChoice == "scissors" && computerChoice == "rock")
	) {
		updateScoreboard("computer");
		console.log("You lose!");
	} else {
		updateScoreboard("draw");
		console.log("It's a draw");
	}
}

function updateScoreboard(winner) {
	if (winner == "player") {
		gamesPlayed++;
		playerScore++;
	} else if (winner == "computer") {
		gamesPlayed++;
		computerScore++;
	} else {
		gamesPlayed++;
	}
	let scoreSummary = document.querySelector("#scoreSummary");
	scoreSummary.textContent = `Games Played: ${gamesPlayed}, Your Score: ${playerScore}, ComputerScore ${computerScore}`;

	const scoreboard = document.querySelector("#scores");
	const score = document.createElement("li");
	score.textContent = `Winner = ${winner}`;

	scoreboard.appendChild(score);
}

function playGame(choice) {
	if (playerScore >= 5) {
		alert("You win!");
	} else if (computerScore >= 5) {
		alert("Computer wins!");
	} else {
		let playerChoice = choice;
		let computerChoice = selectComputerChoice();
		decideWinner(playerChoice, computerChoice);
	}
}

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", () => {
	console.log("You picked Rock.");
	playGame("rock");
});

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", () => {
	console.log("You picked Paper.");
	playGame("paper");
});

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", () => {
	console.log("You picked Scissors.");
	playGame("scissors");
});
