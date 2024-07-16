'use strict';

const getComputerChoice = function() {
    const rand = Math.trunc(Math.random() * 3) + 1;
    if (rand === 1) return 'rock';
    else if (rand === 2) return 'paper';
    else return 'scissors';
};

const getHumanChoice = function() {
    let choice = prompt("It's your turn, will it be rock, paper or scissors ?");
    choice = choice.toLowerCase();
    if (choice === 'rock') return 'rock';
    else if (choice === 'paper') return 'paper';
    else if (choice === 'scissors') return 'scissors';
    else return 'Invalid';
};

const playGame = function() {
    let humanScore = 0;
    let computerScore = 0;

    const playRound = function(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) console.log(`It's a tie! (${humanScore} - ${computerScore})`);
        else if (humanChoice !== computerChoice) {
            let winner = '';
            let loser = '';
            if((humanChoice === 'rock' && computerChoice === 'paper') 
            || (humanChoice === 'paper' && computerChoice === 'scissors')
            || (humanChoice === 'scissors' && computerChoice === 'rock')) {
                winner = 'Computer';
                loser = 'Human';
                computerScore++;
            } else {
                winner = 'Human';
                loser = 'Computer';
                humanScore++;
            }
            console.log(`${winner === 'Computer' ? computerChoice : humanChoice} beats ${winner !== 'Computer' ? computerChoice : humanChoice}! ${winner === 'Computer' ? 'Computer' : 'Human'} wins this round! (${humanScore} - ${computerScore})`);
        }
    };

    let human = '';
    let computer = '';

    let i = 1;
    while(i <= 5) {
        human = getHumanChoice();
        computer = getComputerChoice();

        if(human !== 'Invalid') {
            playRound(human, computer);
            i++;
        } else console.log('Invalid');
    }
    if(humanScore > computerScore) return `HUMAN WINS THE GAME :D (${humanScore} - ${computerScore})`;
    else if(humanScore < computerScore) return `COMPUTER WINS THE GAME! (${humanScore} - ${computerScore})`;
    else return `THE GAME IS TIED! ${humanScore} - ${computerScore})`;
};

playGame();



