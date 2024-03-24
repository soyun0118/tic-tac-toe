function openConfig(event) {
  editPlayer = +event.target.dataset.player;
  configOverlay.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closeConfig() {
  configOverlay.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorOutput.textContent = '';
  /* formElement.firstElementChild.lastElementChild.value = ''; */
  document.getElementById('playername').value = '';
}

// 입력한 이름을 서버로 보내는 대신 JS에서 처리하기
function saveNameConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredName = formData.get('playername').trim();

  if (!enteredName) {
    event.target.firstElementChild.classList.add('error');
    errorOutput.textContent = 'Please enter your name!';
    return;
  }
  
  const updatedPlayerData = document.getElementById('player-data-' + editPlayer);
  updatedPlayerData.children[1].textContent = enteredName;

  players[editPlayer -1].name = enteredName;

  closeConfig();
}