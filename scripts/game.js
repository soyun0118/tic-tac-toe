function resetGameStatus() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;
  gameOver.firstElementChild.innerHTML = 
    'You won, <span id="winner-name">Player Name</span>!';
  gameOver.style.display = 'none';
  
  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardItem = gameField[gameBoardIndex];
      gameBoardItem.textContent = '';
      gameBoardItem.classList.remove('disabled');
      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    alert('Please set player name to start!');
    return;
  }

  resetGameStatus();

  activePlayerName.textContent = players[activePlayer].name;
  gameArea.style.display = 'block';
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.textContent = players[activePlayer].name;
}

function selectField(event) {
  // 리스트 요소를 누른 것이 아니라면 아무것도 하지 않음
  if(event.target.tagName !== 'LI' || gameIsOver) {
    return;
  }

  const selectedField = event.target;
  const selectedCol = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedCol] > 0) {
    alert('This field is occupied!');
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add('disabled');

  gameData[selectedRow][selectedCol] = activePlayer + 1;
  
  const winnerId = checkGameOver();

  if (winnerId !== 0) {
    endGame(winnerId);
  }

  currentRound++;
  switchPlayer();
}

function checkGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 && 
      gameData[i][0] === gameData[i][1] && 
      gameData[i][1] === gameData[i][2]
    ) {
        return gameData[i][0];  //이긴 사람의 id
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 && 
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
        return gameData[0][i];  //이긴 사람의 id
    }
  }
  // 대각선(왼쪽)
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
      return gameData[0][0];
    }
  // 대각선(오른쪽)
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function endGame(winnerId) {
  gameIsOver = true;
  gameOver.style.display = 'block';

  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    gameOver.firstElementChild.firstElementChild.textContent =
    winnerName;
  } else {
    gameOver.firstElementChild.textContent = 'It\'s a draw!';
  }
}