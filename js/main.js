let playerChoice = document.querySelectorAll('.player-choice img');
let pChoice = document.getElementById('p-choice');
let cChoice = document.getElementById('c-choice');
let humanScore = 0, computerScore = 0;
let winer = document.querySelector('#winer');
let reset = document.querySelector('.reset');


function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    computerChoice.toLowerCase();

    if(humanScore === 5 || computerScore === 5) {
        playerChoice.forEach((img) => {
            img.addEventListener('click', (e) => {
                e.stopPropagation();
            })
        });
        return;
    }

    if(humanChoice !== computerChoice) {
        if(humanChoice === 'rock' && computerChoice === 'scissors') {
            winer.textContent = 'Player Win';
            humanScore++;
        }
        else if(humanChoice === 'scissors' && computerChoice === 'rock') {
            winer.textContent = 'Computer Win';
            computerScore++;
        }
        else if(humanChoice === 'scissors' && computerChoice === 'papper') {
            winer.textContent = 'Player Win';
            humanScore++;
        }
        else if(humanChoice === 'paper' && computerChoice === 'scissors') {
            winer.textContent = 'Computer Win';
            computerScore++;
        }
        else if(humanChoice === 'paper' && computerChoice === 'rock') {
            winer.textContent = 'Player Win';
            humanScore++;
        }
        else if(humanChoice === 'rock' && computerChoice === 'paper') {
            winer.textContent = 'Computer Win';
            computerScore++;
        }
    } 
    
    else {
        winer.textContent = 'Draw!!!';
    }

    pChoice.textContent = `${humanScore}`;
    cChoice.textContent = `${computerScore}`;

    if(humanScore >= 5) {
        winer.textContent = '🌟🌟🌟Player Winner🌟🌟🌟';
    }
    
    if(computerScore >= 5) {
        winer.textContent = '🌟🌟🌟Computer Winner🌟🌟🌟';
    }
}

function playGame() {
    //computer choice
    let computerChoice = ['rock', 'paper', 'scissors'];
    let indexChoice = parseInt(Math.random() * computerChoice.length);

    computerChoice[indexChoice];

    // player choice
    playerChoice.forEach((img) => {
        img.addEventListener('click', () => {
            if(img.alt) {
                playRound(img.alt, computerChoice[indexChoice]);
            }
        })
    })
}

playGame();
reset.addEventListener('click', resetGame);


function resetGame() {
    pChoice.textContent = '0';
    cChoice.textContent = '0';
    winer.textContent = '';
    humanScore = 0;
    computerScore = 0;
}


