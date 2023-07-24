var background;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;


function preload() {
  
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(background);  
  drawSprites();
}