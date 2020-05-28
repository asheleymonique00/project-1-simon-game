const red = document.querySelector('.button1');
const green = document.querySelector('.button2');
const yellow = document.querySelector('.button3');
const blue = document.querySelector('.button4');

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
    randomColorButton(),
    randomColorButton(),
    randomColorButton(),
    randomColorButton()
];

const flash = (colorbutton) => {
    return new Promise((resolve, reject) => {
        colorbutton.className += 'active';
        setTimeout(() => {
            //outercircle.classList.remove('active')
            colorbutton.className = colorbutton.className.replace(
                'active', ''
            );
         resolve();
        }, 1000)
    })
}

const game = async () => {
    for (const colorbutton of sequence) {
       await flash(colorbutton)
    }
}

game();


























// let order = [];
// let playerOrder = []
// let flash;
// let score;
// let good;
// let compTurn;
// let intervalId;
// let sound = true
// let start = false;
// let win;

// const scoreCounter = document.querySelector("#score");
// const red = document.querySelector("#button1");
// const green = document.querySelector("button2");
// const yellow = document.querySelector("button3");
// const blue = document.querySelector("button4");
// const startButton = document.querySelector("#start");
// const resetButton = document.querySelector("#reset");

// startButton.addEventListener('click', (event), function() {
//     if (startButton.clicked === true) {
//         start = true;
//         scoreCounter.innerHTML = 0; 
//         function play() {
//             win = false;
//             order = [];
//             playerOrder = [];
//             flash = 0;
//             intervalId = 0;
//             score = 1;
//             scoreCounter.innerHTML = 0;
//             good = true;
//             for(let i = 0; i < 20; i++) {
//             order.push(Math.floor(Math.random() * 4) + 1);
//             }
//             console.log(order)
//         }     
//     } else {
//         scoreCounter.innerHTML = ""
//         clearColor();
//         clearInterval(intervalId);
//     }
//     // if ("start" || win)
//     // play(); 
//     console.log(startButton);
// }
// );

// var simonSaysArray = [];
// var userInput = [];
// var currentRound = 0;
// var score = 0;
// var sequence = 0;
// var started = true;
// var reset = false;

// // setting interval
// var simonSays = function(simonSaysArray) {
//     var x = 0
//     var flashColor = setInterval( // flashing circles
//         function(){
//             $('#circle' + simonSaysArray[x]).fadeTo('fast', 0.5).fadeTo('fast', 1);
//             x++;
//             if(x >= simonSaysArray.length){
//                 clearInterval(flashColor)
//             }
//         }, 1000
//     )
// }

// // starting sequence
// var roundStart = function() {
//     var circles = document.getElementsByClassName('button');
//     if(started && !reset){
//         for(var i = 0; i < circles.length; i++){
//             circles[i].addEventListener('click', function(){
//                 $(this).fadeTo('fast', 0.5).fadeTo('fast', 1);
//                 var circleId = this.getAttribute('id'); // this circle
//                 userInput.push(parseInt(circleId.charAt(circleId.length - 1))); // grabbing last user input's circle array
//                 roundStart(); // running program again
//             });
//         }
//         reset = true;
//     }

// // checks if the game has started
//     if(started){
//         simonSaysArray.push(Math.floor(Math.random()*4)+1);
//         simonSays(simonSaysArray); // flashing circles
//         started = false; 
//     }

// // checking userInput and simonSaysArray
//     for(var i = 0; i < userInput.length; i++){
//         if(JSON.stringify(userInput) === JSON.stringify(simonSaysArray)){  // array becomes a string
//             userInput = [];
//             simonSaysArray.push(Math.floor(Math.random()*4)+1);
//             simonSays(simonSaysArray); // simonSaysArray takes the array and flashs circles
//             score++;
//             var scoretext = document.getElementById('score'); // score
//             scoretext.innerText = '' + score;
//             roundStart(); // runs program again
//             break;
//         }
    
//         // checking userInput and simonSaysArray if they do not match up
//         if(userInput[i] !== simonSaysArray[i]){
//             userInput = [];
//             simonSaysArray = [];
//             score = 0;
//             var scoretext = document.getElementById('score');
//             scoretext.innerText = '' + score;
//             started = true;
//             alert('You lose')
//             break;
//         }
//     }
// }

// // start sequence button
// var start = document.getElementById('start').addEventListener('click', function () {
//     roundStart();
// });

// // reset button
// var reset = document.getElementById('reset').addEventListener('click', function () {
//     userInput = [];
//     simonSaysArray = [];
//     score = 0;
//     var scoretext = document.getElementById('score');
//     scoretext.innerText = '' + score;
//     started = true;
// });