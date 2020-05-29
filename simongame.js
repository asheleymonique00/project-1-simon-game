const red = document.querySelector('.button1');
const green = document.querySelector('.button2');
const yellow = document.querySelector('.button3');
const blue = document.querySelector('.button4');
const startButton = document.querySelector('#start');
const resetButton = document.querySelector('#reset');
const quitButton = document.querySelector('#quit');
let score  = 0;
const scoreCounter = document.querySelector('#score');

const randomColorButton = () => {
    const colorbuttons = [
        red, 
        green, 
        yellow,
        blue
    ];
    return colorbuttons[parseInt(Math.random() * colorbuttons.length)];
};

const sequence = [
    randomColorButton()
];
let sequenceToGuess = [...sequence];

const flash = colorbutton => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            colorbutton.className += ' active';
        }, 500);        
        setTimeout(() => {
            colorbutton.className = colorbutton.className.replace(
                ' active', ''
            );
            setTimeout(() => {
               resolve();
            }, 250);         
        }, 1000)
    });
};

let canClick = false;

const colorButtonClicked = colorButtonClicked => {
    if (!canClick) return;
    const expectedColorButton = sequenceToGuess.shift();
    if (expectedColorButton === colorButtonClicked) {
        if (sequenceToGuess.length === 0) {
        //start new round
        sequence.push(randomColorButton());
        sequenceToGuess = [...sequence];
        score++;
        //score
        const scoreCounter = document.getElementById('score');
        scoreCounter.innerText = "Score: " + score;
        //noise

        game();        
        }
    } else {
        //end game
        alert('You Loss! Game Over');
    } 
}; 

const game = async () => {
    canClick = false;
    for (const colorbutton of sequence) {
        await flash(colorbutton);
     } 
     canClick = true;
 };


startButton.addEventListener('click', game);
resetButton.addEventListener('click', ()=> {
    location.reload()
});
// quitButton = document.getElementById('quit').addEventListener('click', 
// function () {

// }