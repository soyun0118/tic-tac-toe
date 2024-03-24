const configOverlay = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutput = document.getElementById('config-error');

const editName1Btn = document.getElementById('edit-name-1');
const editName2Btn = document.getElementById('edit-name-2');

const cancelConfigBtn = document.getElementById('cancel');
const confirmConfig = document.getElementById('confirm');

editName1Btn.addEventListener('click', openConfig);
editName2Btn.addEventListener('click', openConfig);

cancelConfigBtn.addEventListener('click', closeConfig);
backdropElement.addEventListener('click', closeConfig);

formElement.addEventListener('submit', saveNameConfig);