//board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

//bird
let birdWidth = 44;
let birdHeight = 44;
let birdX = boardWidth/8;
let birdY = boardHeight/2;

let bird = {
   x : birdX,
   y : birdY,
   width : birdWidth,
   height : birdHeight
}

//swords
let swordArray = [];
let swordWidth = 64;
let swordHeight = 512;
let swordX = boardWidth;
let swordY = boardHeight;

let topSwordImg;
let bottomSwordImg;

//physics
let velocityX = -2; // swords moving left speed

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");

   // context.fillStyle = "green";
//context.fillRect(bird.x, bird.y, bird.width, bird.height);

birdImg = new Image();
birdImg.src = "1xbird.png";
birdImg.onload = function() {
context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    }

    topSwordImg = new Image();
    topSwordImg.src = "swordup.png";

    bottomSwordImg = new Image();
    bottomSwordImg.src = "sworddown.png";

requestAnimationFrame(update);
setInterval(placeSwords, 1500); //katru 1.5 sekundi

}

function update() {
requestAnimationFrame(update);
context.clearRect(0, 0, board.width, board.height);

//bird
context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

//swords
for (let i = 0; i < swordArray.length; i++) {
    let sword = swordArray[i];
    sword.x += velocityX;
    context.drawImage(sword.img, sword.x, sword.y, sword.width, sword.height);
}

}

function placeSwords() {
    let topSword = {
        img : topSwordImg,
        x : swordX,
        y : swordY,
        width : swordWidth,
        height : swordHeight,
        passed : false
    }

    swordArray.push(topSword);

}

