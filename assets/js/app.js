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
$(".startButton").click(startGame);


function arrayRandomize(arr) {
    arr.sort(function () {
        return .5 - Math.random();
    })
}


function startGame() {
  console.log("start");
  $(".startButton").hide();
  game.clicks = 0;
  game.pause = false;
  game.sel = [];
  game.newArray = boxes.concat(boxes);
  console.log(game.newArray);
  arrayRandomize(game.newArray);

  $(".game").html("");
  $.each(game.newArray, function (key, value) {
    console.log(key);
    console.log(value);

    let box = $("<div>");
    console.log(box);
    box.addClass("box");
    box.data("cnt", key + 1);
    box.data("val", value);

    let back = $("<div>");
    back.addClass("back");
    back.html(key + 1);
    box.append(back);

    let front = $("<div>");
    front.css("background-color", value);
    front.text(value);
    front.addClass("front");
    box.append(front);
    $(".game").append(box);
  });
}
