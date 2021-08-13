var ship11,shipImg,edges;
var seaImg,sea1;


function preload()
{
sea1=loadImage("sea.png");
//shipImg=loadImage("ship-1.png");
shipImg = loadAnimation( "ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

function setup(){
  
  ///seaImg=createSprite(0, 0, 400, 400);
  createCanvas(400,400);
  sea=createSprite(400,200);
  sea.addImage(sea1);
  sea.velocityX=-4;
  sea.scale=0.3;
 //ship1.addAnimation("running", shipImg)
 //ship1.addImage(shipImg);
  edges = createEdgeSprites();

   //adding scale and position to ship1
  //ship1.scale = 0.5;
  //ship1.x = 50
  ship1 = createSprite(100,200,20,50);
  ship1.addAnimation("running", shipImg);
  ship1.scale = 0.3;
}

function draw() {
  if(sea.x<0){
    sea.x=sea.width/8;
  }

  background(0);
 //ship1=createSprite(200, 200, 40, 40);
 //ship1.scale=0.4;
 
 //ship1.velocityX = 1;

 //background(seaImg);

 //console.log(ship1.y);
  //code to reset the background
  if(sea1.x <0){
    sea1.x = sea1.width/2;
  }
  drawSprites();
}