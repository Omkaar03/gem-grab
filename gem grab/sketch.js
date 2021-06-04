var thief
var police
var objects
var safeZone
var bosses
var thiefImg,policeImg,DiamondImg;
var diamondImg2,diamondImg3,diamondImg4;


var object1=createSprite(700,200,60,70);
object1.shapeColour="red";


function preload(){
  thiefImg=loadImage("../images/thief.jpeg")
  policeImg=loadImage("../images/police.png")
  diamondImg=loadImage("../images/diamond.png")
  diamondImg2=loadImage("../images/diamond2.png")
  diamondImg3=loadImage("../images/diamond3.png")
  diamondImg4=loadImage("../images/diamond4.png")
}




function setup() {
  createCanvas(800,400);
  thief=createSprite(750, 200, 50, 50);
thief.addImage(thiefImg)
thief.scale=0.1

police=createSprite(300,100,50,50);
police.addImage(policeImg)
police.scale=0.1

diamond=createSprite(750,75,50,50);
diamond.addImage(diamondImg)
diamond.scale=0.07

diamond=createSprite(100,75,50,50)
diamond.addImage(diamondImg2)
diamond.scale=0.07

diamond=createSprite(100,350,50,50)
diamond.addImage(diamondImg3)
diamond.scale=0.07

diamond=createSprite(750,350,50,50)
diamond.addImage(diamondImg4)
diamond.scale=0.07

}

function draw() {
  background("white")
  if(keyDown("left")){
thief.velocityX=-2;
  }
  if(keyDown("right")){
    thief.velocityX=2;
  }
  if(keyDown("down")){
    thief.velocityY=2
  }
  if(keyDown("up")){
    thief.velocityY=-2
  }
  //AI for the police
  police.y = thief.y

  //createEdgeSprites();
  //thief.bounceOff("topEdge")
  //thief.bounceOff("bottomEdge")


  
  
  drawSprites();
}