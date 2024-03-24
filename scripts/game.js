function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    alert('Please set player name to start!');
    return;
  }
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
  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add('disabled');
  switchPlayer();
}