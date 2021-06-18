var mario, mario_running, mario_collided;
var bg, bgImage;


function preload(){
  mario_running =  loadAnimation("images/mar1.png","images/mar2.png","images/mar3.png",
  "images/mar4.png","images/mar5.png","images/mar6.png","images/mar7.png");
  bgImage = loadImage("images/bgnew.jpg");
}

function setup() {
  createCanvas(1000, 600);
  //by default initail size ati hai objct par image
  bg = createSprite(580,300);
  bg.addImage(bgImage);
// scaling the img to half - if the image 100%  -- it will scale to 50%
  bg.scale =0.5;

  mario = createSprite(200,505,20,50);
//   label- animation ko name de re  , varname
  mario.addAnimation("running", mario_running);
  mario.scale =0.3;

// // creating ground sprite
  ground = createSprite(200,585,400,10);
  ground.visible = false;
}

function draw() {
 
// moving the mario 
  if(keyDown("space") ) {
    // mario.velocityY = -16;
    mario.y = mario.y-16;
  }

  //it is used to create gravity
  mario.velocityY = mario.velocityY+0.5; 


  
  
  // mario.debug= true;
  // when object is collided with another object
  mario.collide(ground);

  background("lightgreen")
  drawSprites();
}