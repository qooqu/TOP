function computerChoose() {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function findWinner(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return 'draw';
    }
    if (
        playerChoice == 'rock' && computerChoice == 'scissors' ||
        playerChoice == 'paper' && computerChoice == 'rock' ||
        playerChoice == 'scissors' && computerChoice == 'paper'
    ) {
        return 'player';
    }
    return 'computer';
}

function oneRound(playerChoice) {
    let computerChoice = computerChoose();
    let roundWinner = findWinner(playerChoice, computerChoice);
    gameStatus(roundWinner);
}

function gameStart() {
    toggleBtns();
    gameStatusDiv.textContent = ``;
    playerWins = 0;
    computerWins = 0;
}

function gameStatus(roundWinner) {
    if (Math.max(playerWins, computerWins) <= 2) {
        switch (roundWinner) {
            case 'draw':
                gameStatusDiv.textContent = `Push. Player: ${playerWins}. Computer: ${computerWins}.`;
                break;
            case 'player':
                playerWins++;
                gameStatusDiv.textContent = `Nice one. Player: ${playerWins}. Computer: ${computerWins}.`;
                break;
            case 'computer':
                computerWins++;
                gameStatusDiv.textContent = `Ah bad luck. Player: ${playerWins}. Computer: ${computerWins}.`;
        }
    }
    if (Math.max(playerWins, computerWins) >= 3) {
        if (playerWins > computerWins) {
            gameStatusDiv.textContent = `You win! ${playerWins} to ${computerWins}`;
            toggleBtns();
        } else {
            gameStatusDiv.textContent = `Computer wins, ${computerWins} to ${playerWins} :(`;
            toggleBtns();
        }
    }
}

function toggleBtns() {
    btns.forEach((btn) => {
        btn.classList.toggle('btn-disabled');
    })
}

let playerWins;
let computerWins;
const btns = document.querySelectorAll('button');
const btnStart = document.getElementById('btnStart');
const btnRock = document.getElementById('btnRock');
const btnPaper = document.getElementById('btnPaper');
const btnScissors = document.getElementById('btnScissors');

btnStart.addEventListener('click', gameStart);
btnRock.addEventListener('click', () => oneRound('rock'));
btnPaper.addEventListener('click', () => oneRound('paper'));
btnScissors.addEventListener('click', () => oneRound('scissors'));

const gameStatusDiv = document.getElementById('gameStatusDiv');
