
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0 ;
var score = 0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;  
  
ground=createSprite(400,350,900,10);
ground.velocityX=-4;

foodGroup=createGroup();

}
function draw() {
background("green");
    
monkey.velocityY=2;
if (keyDown("space")) {
 monkey.velocityY=-29;
  

}   

 
  food();  
  obstacle();

     
ground.x=ground.width/2;
console.log(ground.x); 
    
monkey.collide(ground);
  
 stroke("white");
  textSize(20);
  fill("white");
  text( "Score: "+score, 500,50);
  
  
 stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text( "Survival Time: "+survivalTime, 100,50);
  
drawSprites();  
}

 function food() {
    if (frameCount % 80 === 0){
      banana=createSprite(350,200,20,20)
      banana.addImage("banana_",bananaImage);
      banana.scale=0.1;  
      banana.y = Math.round(random(120,200));
      banana.velocityX=-4;
      banana.lifetime=200;
      obstacle.velocityX = -(6 + score/100);
      
      
      foodGroup.add(banana)
    }
  }

function obstacle() {
  if (frameCount % 300 === 0){
    
     var obstacle=createSprite(350,325,20,20)
    obstacle.addImage("obstacle_",obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-4;
    obstacle.lifetime=200;
    //obstacle.velocityX = -(6 + survivalTime/100);
    
    
    
  }
}





