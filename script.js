const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const playerScoreElement = document.getElementById('player-score');
const compScoreElement = document.getElementById('comp-score');
const outputElement = document.getElementById('output');

let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(playerChoice, compChoice) {
    if (playerChoice === compChoice) {
        return 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && compChoice === 'scissors') ||
        (playerChoice === 'paper' && compChoice === 'rock') ||
        (playerChoice === 'scissors' && compChoice === 'paper')
    ) {
        return 'Player wins!';
    } else {
        return 'Computer wins!';
    }
}

function updateScore() {
    playerScoreElement.textContent = `Player Score: ${playerScore}`;
    compScoreElement.textContent = `Computer Score: ${compScore}`;
}

function checkGameOver() {
    if (playerScore === 5) {
        outputElement.textContent = 'Player wins the game!';
        disableButtons();
    } else if (compScore === 5) {
        outputElement.textContent = 'Computer wins the game!';
        disableButtons();
    }
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function playRound(playerSelection) {
    const compChoice = getComputerChoice();
    const result = determineWinner(playerSelection, compChoice);

    if (result === 'Player wins!') {
        playerScore++;
    } else if (result === 'Computer wins!') {
        compScore++;
    }

    updateScore();
    outputElement.textContent = result;

    checkGameOver();
}

rockBtn.addEventListener('click', function () {
    playRound('rock');
});

paperBtn.addEventListener('click', function () {
    playRound('paper');
});

scissorsBtn.addEventListener('click', function () {
    playRound('scissors');
});