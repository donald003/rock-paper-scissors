function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie!";
    }

    if (
        (playerSelection === 'rock' && computerSelection === 'Paper') ||
        (playerSelection === 'paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'Rock')
    ) {
        return `You Lose! ${computerSelection} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
    }
    return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`;
}


function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {

        let playerSelection = prompt(`Round ${i}: Make your choice: `)
        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }
    }

    let gameResult;
    if (playerScore > computerScore) {
        gameResult = `You win ${playerScore} - ${computerScore}!`;
    } else if (computerScore > playerScore) {
        gameResult = `You lose ${computerScore} - ${playerScore}!`
    } else {
        gameResult = `Tie ${playerScore} - ${computerScore}!`
    }
    console.log(gameResult);
}

game();