'use strict';

const getComputerChoice = function() {
    const rand = Math.trunc(Math.random() * 3) + 1;
    if (rand === 1) return 'rock';
    else if (rand === 2) return 'paper';
    else return 'scissors';
}

console.log(getComputerChoice());