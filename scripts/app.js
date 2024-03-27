const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

const players = [
  {
    name: '',
    symbol: 'X'
  },
  {
    name: '',
    symbol: 'O'
  },
];

const configOverlay = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutput = document.getElementById('config-error');
const gameArea = document.getElementById('active-game');
const activePlayerName = document.getElementById('active-player-name');
const gameOver = document.getElementById('game-over');

const editName1Btn = document.getElementById('edit-name-1');
const editName2Btn = document.getElementById('edit-name-2');
const cancelConfigBtn = document.getElementById('cancel');
const startBtn = document.getElementById('start');
const gameField = document.querySelectorAll('#game-board li');

editName1Btn.addEventListener('click', openConfig);
editName2Btn.addEventListener('click', openConfig);

cancelConfigBtn.addEventListener('click', closeConfig);
backdropElement.addEventListener('click', closeConfig);

formElement.addEventListener('submit', saveNameConfig);

startBtn.addEventListener('click', startNewGame);

for (const gameFieldElement of gameField) {
  gameFieldElement.addEventListener('click', selectField);
}