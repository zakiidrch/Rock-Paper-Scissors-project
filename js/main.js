let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let computerChoice = ['rock', 'paper', 'scissors'];
    let indexChoice = parseInt(Math.random() * computerChoice.length);

    return computerChoice[indexChoice];
}

function getHumanChoice(){
    //let humenChoice = prompt("Entre Your Choice!");
    return humenChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    computerChoice.toLowerCase();

    if(humanChoice !== computerChoice) {
        if(humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log('You wiin! rock beats scissors');
            humanScore++;
        }
        else if(humanChoice === 'scissors' && computerChoice === 'rock') {
            console.log('You lose! rock beats scissors');
            computerScore++;
        }
        else if(humanChoice === 'scissors' && computerChoice === 'papper') {
            console.log('You wiin! scissors beats paper');
            humanScore++;
        }
        else if(humanChoice === 'paper' && computerChoice === 'scissors') {
            console.log('You lose! scissors beats paper');
            computerScore++;
        }
        else if(humanChoice === 'paper' && computerChoice === 'rock') {
            console.log('You wiin! paper beats rock');
            humanScore++;
        }
        else if(humanChoice === 'rock' && computerChoice === 'paper') {
            console.log('You lose! paper beats rock');
            computerScore++;
        }
    } 
    
    else {
        console.log('Draw!!!');
    }

}

function playGame() {
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame();

if(humanScore > computerScore) {
    console.log('You Wiin!!!');
} 
else if(humanScore < computerScore) {
    console.log('Computer Wiin!!!');
} else {
    console.log('draw!!!');
}



