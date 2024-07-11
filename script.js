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

// let humanScore = 0;
// let computerScore = 0;

// const playRound = function(humanChoice, computerChoice) {
//     if (humanChoice === computerChoice) console.log("It's a tie!");
//     else if (humanChoice !== computerChoice && humanChoice !== 'Invalid') {
//         let winner = '';
//         let loser = '';
//         if((humanChoice === 'rock' && computerChoice === 'paper') 
//         || (humanChoice === 'paper' && computerChoice === 'scissors')
//         || (humanChoice === 'scissors' && computerChoice === 'rock')) {
//             winner = 'Computer';
//             loser = 'Human';
//             computerScore++;
//         } else {
//             winner = 'Human';
//             loser = 'Computer';
//             humanScore++;
//         }
//         console.log(`${winner === 'Computer' ? computerChoice : humanChoice} beats ${winner !== 'Computer' ? computerChoice : humanChoice}! ${winner === 'Computer' ? 'Computer' : 'Human'} wins this round!`);
//     }
//     else console.log(humanChoice);
// };

const playGame = function() {
    let humanScore = 0;
    let computerScore = 0;

    const playRound = function(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) console.log("It's a tie!");
        else if (humanChoice !== computerChoice && humanChoice !== 'Invalid') {
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
            console.log(`${winner === 'Computer' ? computerChoice : humanChoice} beats ${winner !== 'Computer' ? computerChoice : humanChoice}! ${winner === 'Computer' ? 'Computer' : 'Human'} wins this round!`);
        }
        else console.log(humanChoice);
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
        } else playRound(human, computer);
    }
    if(humanScore > computerScore) console.log('HUMAN WINS THE GAME :D');
    else if(humanScore < computerScore) console.log('COMPUTER WINS THE GAME!');
    else console.log('THE GAME IS TIED!');
};

playGame();



