console.log('test 01')

function randomColor() {
    // Picks a random color for the goal by picking a random number
    // between 0 and 250 for red, green, and blue and combining it
    goalRed = Math.floor(Math.random() * 26) * 10;
    goalGreen = Math.floor(Math.random() * 26) * 10;
    goalBlue = Math.floor(Math.random() * 26) * 10;
    goal.style.cssText = `background-color: rgb(${goalRed},${goalGreen},${goalBlue})`;
}


function reset() {}

function startTimer() {}


function changeRed(x) {
    currRed += x;
    if (currRed < 0 || currRed > 250) {
        currRed -= x;
    }
    updateContent();
}

function changeGreen(x) {
    currGreen += x;
    if (currGreen < 0 || currGreen > 250) {
        currGreen -= x;
    }
    updateContent();
}

function changeBlue(x) {
    currBlue += x;
    if (currBlue < 0 || currBlue > 250) {
        currBlue -= x;
    }
    updateContent();
}

function updateContent() {
    if (!win) {
        updateCanvas();
        updateScore();
        checkWin();
    } else {
        showEnd();
    }
}

function updateCanvas() {
    canvas.style.cssText = `background-color: rgb(${currRed},${currGreen},${currBlue})`;
    console.log(currRed, currGreen, currBlue);
}

function updateScore() {
    redScore.textContent = currRed;
    greenScore.textContent = currGreen;
    blueScore.textContent = currBlue;

}

function checkWin() {
    if (currRed == goalRed && currGreen == goalGreen && currBlue == goalBlue) {
        win = true;
    }
}

function showEnd() {
    winningText.textContent = '★You won!★';
}


// Script
var goalRed;
var goalGreen;
var goalBlue;

var currRed = 0;
var currGreen = 0;
var currBlue = 0;

const canvas = document.getElementById('canvas');
const goal = document.getElementById('goal');

const redScore = document.getElementById('red-score');
const greenScore = document.getElementById('green-score');
const blueScore = document.getElementById('blue-score');

const winningText = document.getElementById('you-won');
var win = false;

randomColor();

// TODO: Maybe have a timer to keep score
// TODO: Reset the timer with the reset button
// TODO: keep the high score in a log file somewhere