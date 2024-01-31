			// Initialise the starting variables of the program
			let roundNumber = 1;
			let playerScore = 0;
			let computerScore = 0;

			// Generates random integer (0, 1 or 2) and matches to a choice of Rock, Paper or Scissors
			// Returns choice
			function getComputerChoice() {
				let choiceInt = Math.floor(Math.random() * 3);
				if (choiceInt == 0) {
					return "rock";
				} else if (choiceInt == 1) {
					return "paper";
				} else {
					return "scissors";
				}
			}

			// Judges the winner of Player's Choice vs Computer's Choice
			function judgeWinner(playerChoice, computerChoice) {
				// Draw Condition
				if (playerChoice == computerChoice) {
					roundNumber++;
					return "It's a Draw";
					// Win Condition
				} else if (
					(playerChoice == "scissors" && computerChoice == "paper") ||
					(playerChoice == "paper" && computerChoice == "rock") ||
					(playerChoice == "rock" && computerChoice == "scissors")
				) {
					roundNumber++;
					playerChoice++;
					return "You win this round!";
					// Lose Condition
				} else {
					roundNumber++;
					computerScore++;
					return "You lose this round!";
				}
			}

			// Iterates the game through 5 rounds and keeps track of score
			function playGame() {
				while (roundNumber <= 5) {
					let computerChoice = getComputerChoice();
					let playerChoice = prompt("Rock, Paper or Scissors?");
					console.log("Computer Choice: " + computerChoice);
					console.log("Player Choice: " + playerChoice);
					console.log("Round Number: " + roundNumber);
					console.log(judgeWinner(playerChoice, computerChoice));
				}
			}
			const btnRock = document.querySelector("#btnRock");
			btnRock.addEventListener('click', () => {
				let playerChoice = "rock";
				let computerChoice = getComputerChoice();
				judgeWinner(playerChoice, computerChoice)
			})

			// Final declaration of the winner, who has highest score
			if (playerScore == computerScore) {
				console.log("Overall, It's a draw!");
			} else if (playerScore > computerScore) {
				console.log("Overall, you WIN the game!");
			} else {
				console.log("Overall, you LOSE the game!");
			}

			let pickRock = document.getElementById(btnRock);