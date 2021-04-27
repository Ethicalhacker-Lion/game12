 const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;

 var engine, world;

 var backgroundImg;
 var gunImg;
 var aimImg;
 var canvas;
 var PCplayer;
 var boundary1;


 function preload(){
    backgroundImg = loadImage("images/background.jpg")

    
 } 


 function setup(){
    canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

     PCplayer = createSprite(500,700,100,100);

     target1 = createSprite(850,500,80,80);
     target1.velocityX = 5;    

     target2 = createSprite(650,350,80,80);
     target2.velocityX = 5;    

     target3 = createSprite(450,250,80,80);
     target3.velocityX = 5;    

     target4 = createSprite(250,100,80,80);
     target4.velocityX = 5;    
     
     boundary1 = createSprite(1190,400,5,800);
     boundary2 = createSprite(10,400,5,800)
   
     }

function draw(){
     background (backgroundImg);


          if(target1.isTouching(boundary1)){
          target1.velocityX = target1.velocityX * (-1);
         }

         if(target2.isTouching(boundary1)){
            target2.velocityX = target2.velocityX * (-1);
         }

         if(target3.isTouching(boundary1)){
            target3.velocityX = target3.velocityX * (-1);
         }

         if(target4.isTouching(boundary1)){
            target4.velocityX = target4.velocityX * (-1);
         }

         
         if(target1.isTouching(boundary2)){
            target1.velocityX = target1.velocityX * (-1);
         }
         
         if(target2.isTouching(boundary2)){
            target2.velocityX = target2.velocityX * (-1);
         }
         
         if(target3.isTouching(boundary2)){
            target3.velocityX = target3.velocityX * (-1);
         }
         
         if(target4.isTouching(boundary2)){
            target4.velocityX = target4.velocityX * (-1);
         }
  

          Engine.update(engine);
          drawSprites();
}