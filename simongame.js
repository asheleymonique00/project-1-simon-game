const red = document.querySelector('.button1');
const green = document.querySelector('.button2');
const yellow = document.querySelector('.button3');
const blue = document.querySelector('.button4');
const startButton = document.querySelector('#start');
const resetButton = document.querySelector('#reset');
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

const sequence = [randomColorButton()];
let sequenceToGuess = [...sequence];

const flash = (colorbutton) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            colorbutton.className += ' active';
        }, 500);        
        setTimeout(() => {
            colorbutton.className = colorbutton.className.replace(
                ' active', ''
            );
         resolve();
        }, 1000)
    })
}

let canClick = false;

        const colorbuttonClicked = colorbutton => {
            if (!canClick) return;
            console.log(colorbutton);
            const expectedColorButton = sequenceToGuess.shift();
            if (expectedColorButton === colorbuttonClicked) {
               if (sequenceToGuess.length === 0) {
                //start new round
               }
            } else {
                //end game
                alert('game over');
            }
        }; 

const game = async () => {
    for (const colorbutton of sequence) {
       await flash(colorbutton);
    }

    canClick = true;
}

startButton.addEventListener('click', game);
resetButton.addEventListener('click', ()=> {
    location.reload()
});

