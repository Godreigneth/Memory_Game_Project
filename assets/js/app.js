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
    $('.startButton').hide();
    game.clicks = 0;
    game.pause = false;
    game.sel = [];
    game.newArray = boxes.concat(boxes);
    console.log(game.newArray);
    $('.game').html('');
    $.each(game.newArray, function(key,value){
        console.log(key);
        console.log(value);
    })
}