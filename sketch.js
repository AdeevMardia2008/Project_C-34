var dog;
var happyDog;
var foodS;
var foodStock;

function preload()
  {
  loadImage("image/dogImg.png");
  loadImage("image/dogImg1.png");
}

function setup() {

  createCanvas(500, 500);
  
  dog = createSprite(250,250);
  
}


function draw() {  

  drawSprites();

}



