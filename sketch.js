
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground;
var survivalTime = 0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400, 400);
  
  monkey = createSprite(200,305,30,60);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,380,400,40);
  ground.shapeColor = "brown";
  ground.velocityX = -4;
  
} 


function draw() {
  
  background("green");
    
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y >= 200){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.6;
  
  if (ground.x < 200){
    ground.x = ground.width/2;
  }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);

  stroke("black") ;
  textSize(20);
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time:"+ survivalTime,100,50);
  
  spawnFood();
  spawnObstacles();
  drawSprites();
  
}

function spawnFood(){
  
  if(frameCount%80 === 0){
    banana = createSprite(400,200,10,30);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(120,200));
    banana.velocityX = -3;
    banana.lifetime = 400;
    
    //foodGroup.add(banana);
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  }
  
}

function spawnObstacles(){
 
  if (frameCount % 300 === 0){
   var obstacle = createSprite(400,345,40,40);
   obstacle.velocityX = -3;
   obstacle.addImage(obstacleImage);           
   obstacle.scale = 0.1;
   obstacle.lifetime = 400;
   //obstacleGroup.add(obstacle);
 }
  
}






