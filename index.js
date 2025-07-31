const generateBtn = document.getElementById("generateBtn");
const guessBtn = document.getElementById("guessBtn");
const guessResult = document.getElementById("guessResult");

let min = Number(document.getElementById("min").value);
let max = Number(document.getElementById("max").value);
let randomNum = generateRandomNum(min, max);
let attempt = 1;

function generateRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

generateBtn.onclick = function(){
    min = Number(document.getElementById("min").value);
    max = Number(document.getElementById("max").value);
    randomNum = generateRandomNum(min, max);
    guessResult.innerHTML = `A new number has been set. <br> Enter your guess`;
    attempt = 1;
}

guessBtn.onclick = function(){
    const guessNum = Number(document.getElementById("guessNum").value);

    if (guessNum < min || guessNum > max) {
        guessResult.textContent = `Guess must be between ${min} and ${max}.`;
        attempt++;
        return;
    }

    switch(true){
        case randomNum > guessNum:
            guessResult.textContent = `The number is greater than ${guessNum}.`;
            attempt++;
            break;
        case randomNum < guessNum:
            guessResult.textContent = `The number is lesser than ${guessNum}.`;
            attempt++;
            break;
        case randomNum === guessNum:
            guessResult.innerHTML = `You've guessed it right! The number is ${randomNum}. <br> It took you ${attempt} attempts to guess the number.`;
            break;
    }
}