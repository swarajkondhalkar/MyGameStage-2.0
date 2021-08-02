var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var pig, pigImage;

function preload(){
  backgroundImage =loadImage("images/bg.jpg")
  pigImage =loadImage("images/piggy.png")
  groundImage =loadImage("images/ground.jpg")
}

function setup() {
  canvas =createCanvas(windowWidth, windowHeight);
  ground = createSprite(displayWidth /2 -20,displayHeight /2 -40,1500,500);

  ground.addImage("ground",backgroundImage)
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.scale =1.4
  //console.log(ground.x)
  invGround =createSprite( 50, 600, 1500, 10)
  invGround.visible =false;
  pig =createSprite( 50,400,100,100);
  pig.addImage(pigImage);
  pig.scale =0.25;
}

function draw() {
  background(255);
  
  if(ground.x <0){
   ground.x =ground.width /2
  }
  if(keyDown("RIGHT_ARROW")){
    pig.x =pig.x +5;
  }
  if(keyDown("LEFT_ARROW")){
    pig.x =pig.x -5;
  }
  if(keyDown("UP_ARROW")){
    pig.velocityY =-4;
  }
  pig.velocityY +=0.3
  pig.collide(invGround)
  drawSprites();
}



