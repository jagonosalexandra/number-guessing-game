const generateBtn = document.getElementById("generateBtn");
const guessBtn = document.getElementById("guessBtn");
const guessResult = document.getElementById("guessResult");

let min = Number(document.getElementById("min").value);
let max = Number(document.getElementById("max").value);
let target = generateTargetNum(min, max);
let attempt = 0;

function generateTargetNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

generateBtn.onclick = function(){
    min = Number(document.getElementById("min").value);
    max = Number(document.getElementById("max").value);
    target = generateTargetNum(min, max);
    guessResult.innerHTML = `A new number has been set. <br> Enter your guess`;
    attempt = 0;
}

guessBtn.onclick = function(){
    const guess = Number(document.getElementById("guess").value);

    if (guess < min || guess > max) {
        guessResult.textContent = `Guess must be between ${min} and ${max}.`;
        return;
    } else {
        attempt++;
        if (target > guess) {
            guessResult.textContent = `The number is greater than ${guess}.`;
        } else if (target < guess) {
            guessResult.textContent = `The number is lesser than ${guess}.`;
        } else {
            guessResult.innerHTML = `You've guessed it right! The number is ${target}. <br> It took you ${attempt} attempts to guess the number.`;
        }
    }
}