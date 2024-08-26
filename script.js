'use strict';

const btns = document.querySelectorAll('.btn');
const buttons = document.querySelector('.buttons');
const btnStart = document.querySelector('.btn-start');
const compRound = document.querySelector('.round-computer');
const humanRound = document.querySelector('.round-human');
const compGame = document.querySelector('.game-computer');
const humanGame = document.querySelector('.game-human');
const scores = document.querySelector('.scores');
let computerScore = document.getElementById('score-computer');
let humanScore = document.getElementById('score-you');
const content = document.getElementById('content');

const result = document.createElement('div');
result.classList.add('hidden');
const finalResult = document.createElement('div');
finalResult.classList.add('hidden');
result.style.fontSize = '20px';
finalResult.style.fontSize = '20px';
finalResult.style.display = 'block';
result.style.display = 'block';
result.style.textAlign = 'center';
finalResult.style.textAlign = 'center';
result.style.marginBottom = '100px';
finalResult.style.marginBottom = '100px';
content.after(result);
result.after(finalResult);

const getComputerChoice = function () {
  const rand = Math.trunc(Math.random() * 3) + 1;
  if (rand === 1) return 'Rock';
  else if (rand === 2) return 'Paper';
  else return 'Scissors';
};

let hScore;
let cScore;
btnStart.addEventListener('click', function () {
  buttons.classList.remove('hidden');
  btnStart.textContent = 'Again';
  scores.classList.remove('hidden');
  computerScore.textContent = '0';
  humanScore.textContent = '0';
  hScore = 0;
  cScore = 0;
  result.classList.add('hidden');
  finalResult.classList.add('hidden');
});

let humanChoice;
let computerChoice;

const playRound = function (humanChoice, computerChoice) {
  if (hScore < 5 && cScore < 5) {
    if (humanChoice === computerChoice) {
      result.textContent = "It's a tie!";
      result.classList.remove('hidden');
    } else if (humanChoice !== computerChoice) {
      let winner = '';
      let loser = '';
      if (
        (humanChoice === 'Rock' && computerChoice === 'Paper') ||
        (humanChoice === 'Paper' && computerChoice === 'Scissors') ||
        (humanChoice === 'Scissors' && computerChoice === 'Rock')
      ) {
        winner = 'Computer';
        loser = 'Human';
        cScore++;
        computerScore.textContent = String(cScore);
      } else {
        winner = 'Human';
        loser = 'Computer';
        hScore++;
        humanScore.textContent = String(hScore);
      }
      result.classList.remove('hidden');
      result.textContent = `${
        winner === 'Computer' ? computerChoice : humanChoice
      } beats ${winner !== 'Computer' ? computerChoice : humanChoice}! ${
        winner === 'Computer' ? 'Computer' : 'Human'
      } wins this round!`;
    }
  }

  if (hScore == 5) {
    finalResult.classList.remove('hidden');
    finalResult.textContent = 'HUMAN WINS THE GAME!';
    return;
  }

  if (cScore == 5) {
    finalResult.classList.remove('hidden');
    finalResult.textContent = 'COMPUTER WINS THE GAME!';
    return;
  }
};

btns.forEach(btn =>
  btn.addEventListener('click', function (e) {
    humanChoice = e.target.textContent;
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  })
);
