'use strict';

const inputElem = document.querySelector('.input');
const btnCheckElem = document.querySelector('.btn-check');
const btnAgainElem = document.querySelector('.btn-again');
const numberElem = document.querySelector('.number');
const scoreElem = document.querySelector('.score');
const highScoreElem = document.querySelector('.high-score');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
	document.querySelector('.message').textContent = message;
}

function setBackground(color) {
	document.body.style.backgroundColor = color;
}

btnCheckElem.addEventListener('click', function () {
	const guess = Number(inputElem.value);

	if (!guess) {
		displayMessage('⛔️ No number!');
		setBackground('#ef4444');
	} else if (guess === secretNumber) {
		displayMessage('🎉 Correct number');
		setBackground('#4ade80');
		numberElem.textContent = guess;
		inputElem.setAttribute('disabled', 'disabled');
		if (score > highScore) {
			highScore = score;
			highScoreElem.textContent = highScore;
		}
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? '📈 To high!' : '📉 To low!');
			setBackground('#ef4444');
			score--;
			scoreElem.textContent = score;
		} else {
			displayMessage('💥 You lost the game!');
			scoreElem.textContent = 0;
			inputElem.setAttribute('disabled', 'disabled');
		}
	}
});

btnAgainElem.addEventListener('click', function () {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	displayMessage('Start guessing...');
	setBackground('#ffffff');
	numberElem.textContent = '?';
	inputElem.value = '';
	score = 20;
	scoreElem.textContent = score;
	inputElem.removeAttribute('disabled');
});
