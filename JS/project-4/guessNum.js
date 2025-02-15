let randomNum = parseInt(Math.random() * 100+1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessLot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',(e) =>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert('please enter a valid number!')
    }
    else if(guess < 1 || guess > 100){
        alert('Number should be between 1 to 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNum}`);
            endGame();
        } else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNum){
        displayMessage(`You won!!!. The correct number was ${guess}`);
        endGame();
    }else if(guess < randomNum){
        displayMessage(`The number is greater than ${guess}`)
        // prevGuess.push(guess);
    }else if(guess > randomNum){
        displayMessage(`The number is less than ${guess}`)
        // prevGuess.push(guess);
    }
}

function displayGuess(guess) {
     userInput.value = '';
     guessLot.innerHTML += `${guess},`;
     numGuess++;
     remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function  newGame() {
    const restart = document.querySelector('#newGame')
    restart.addEventListener('click', (e) => {
        randomNum = parseInt(Math.random() * 100+1);
        prevGuess = [];
        numGuess = 1;
        guessLot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
    })
}

function  endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start new game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}