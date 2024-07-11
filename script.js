'use strict';

const getComputerChoice = function() {
    const rand = Math.trunc(Math.random() * 3) + 1;
    if (rand === 1) return 'rock';
    else if (rand === 2) return 'paper';
    else return 'scissors';
}

const getHumanChoice = function() {
    const choice = prompt("It's your turn, will it be rock, paper or scissors ?");
    if (choice === 'rock') return 'rock';
    else if (choice === 'paper') return 'paper';
    else if (choice === 'scissors') return 'scissors';
    else return 'Invalid choice';
}

