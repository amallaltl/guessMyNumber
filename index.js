'use strict'

var random = Math.floor((Math.random() * 100) + 1);
var maxScore = 20;
var highScore = 0;

const numberTag = document.querySelector('.number');
const guessTag = document.querySelector('.guess');
const bodyTag =  document.querySelector('body');
const highScoreTag = document.querySelector('.highscore');
const score = document.querySelector('.score');
const messageTag = document.querySelector('.message');

const displayMessage = (message) => {
    console.log(message);
    messageTag.textContent = message;
    score.textContent = maxScore;
    highScoreTag.textContent = highScore;
}

document.querySelector('.check').addEventListener('click', function(){
    var currentValue = Number(document.querySelector('.guess').value);
    if(currentValue === random){
        document.querySelector('.number').value = random;
        if(highScore < maxScore)
            highScore = maxScore;
        bodyTag.style.backgroundColor = '#60b347';
        numberTag.textContent = random;
        
        displayMessage("You got it!");

    } else if(currentValue !== random){
        maxScore--;
        if(currentValue < random)
            displayMessage("Too low!");
        else 
            displayMessage("Too high!");
    }
});

document.querySelector('.again').addEventListener('click', function(){
    maxScore = 20;
    random = Math.trunc(Math.random() * 20) + 1;
    numberTag.textContent = '?';
    guessTag.value = '';
    bodyTag.style.backgroundColor = '#222';
    numberTag.style.width = '15rem';
    displayMessage('Start guessing...');
});

const overLay = document.querySelector('.overlay');
const model = document.querySelector('.model');
const between2 = document.querySelector('.between2');
const closeTheModel = document.querySelector('.close-model');

const showDevModel = () => {
    model.classList.remove('hidden');
    overLay.classList.remove('hidden');
}

between2.addEventListener('click', showDevModel);

const closeModel = () => {
    model.classList.add('hidden');
    overLay.classList.add('hidden');
}

closeTheModel.addEventListener('click', closeModel);

overLay.addEventListener('click', closeModel);

document.addEventListener('keydown', function(event){
    if((event.key === 'Escape') && (!model.classList.contains('hidden')))
        closeModel();
});