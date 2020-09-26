var tower
var door
var climber
var ghost




function preload() {
towerImage=loadImage("tower.png");
doorImage=loadImage("door.png");
climberImage=loadImage("climber.png");
ghostImage=loadImage("ghost-standing.png");
}

function setup() {
  createCanvas(400,400)
tower=createSprite(200,200,400,400);
tower.addImage("tower",towerImage);
tower.scale=0.7;
tower.velocityY = 2;

ghost=createSprite(100,300,10,10);
ghost.addImage("ghost",ghostImage);
ghost.scale=0.2;
}

function draw() {
background("black");
if(tower.y>400){
  tower.y=200
}
if(keyDown("space")){
ghost.velocityY= -3;
}
ghost.velocityY=ghost.velocityY+0.5;
if(keyDown(LEFT_ARROW)){
  ghost.x=ghost.x-2;
}
if(keyDown(RIGHT_ARROW)){
ghost.x=ghost.x+2;
}
doors();
drawSprites();
}

function doors(){
if(frameCount% 50 === 0){
door=createSprite(200,0);
door.addImage("door",doorImage);
door.scale=0.5; 
climber=createSprite(200,35);
climber.scale=0.5;
climber.addImage("climber",climberImage);
door.x=random(120,400);
climber.x=door.x;
door.velocityY=1;
climber.velocityY=1;
  
  
  
  
  
  
} 
  
}
  
  