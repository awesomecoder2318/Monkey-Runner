
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;

  
monkey=createSprite(100,300);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
}

function draw() {
background("black");
  
   ground.x=ground.width/2;

  banana();
   
  obstacle();
  
  if (keyDown("space")){
    monkey.velocityY=-12;
  }
      monkey.velocityY = monkey.velocityY +0.8;

    monkey.collide(ground)


   


  survivalTime=Math.ceil(frameCount/frameRate())
  text ("Survival Time:" + survivalTime, 100,50)
  
  drawSprites();
}

function banana(){
  if (frameCount % 80 === 0){
   var  bananab=createSprite(300,300)
    bananab.y = Math.round(random(100,350));
    bananab.addImage(bananaImage)
    bananab.scale=0.07;
    bananab.velocityX=-4
    bananab.lifetime=90
    FoodGroup.add(bananab)
  }
}

function obstacle(){
  if (frameCount % 300 === 0){
       var obstacleA = createSprite(300,325);
    obstacleA.addImage(obstacleImage);
    obstacleA.scale=0.15;
   obstacleA.velocityX=-6;
        obstacleA.lifetime=90;
        obstacleGroup.add(obstacleA);

  }
}




