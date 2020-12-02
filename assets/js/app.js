/*** Array that holds different contents hidden within the boxes*/ 
const boxes = [
  "red",
  "blue",
  "green",
  "purple",
  "yellow",
  "pink",
  "teal",
  "gold",
];

/*** Game Object, where all the data can be set*/ 
const game = {};
$('.startButton').click(startGame);

function startGame() {
    console.log('start');
}