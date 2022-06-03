var pig 
var pigImage
var pigwalk
var warthog
var corn
var grass
var deadpig
var bush,bushGroup
var can
var pig2
var can,canGroup
var gameStates
var score
function preload() {
  pigImage = loadAnimation("pig.png")
bushImg = loadImage("bush.png")
canImg = loadImage("can.png")

 backgroundImg= loadImage("grass.jpg")
}
  
  function setup() {
  createCanvas(800,400);
  canGroup = new Group()
  bushGroup = new Group()
  
  bg = createSprite(0,0,800,400)
  bg.addImage(backgroundImg);
 // bg.scale = 0.25
bg.velocityX = -4
  pig = createSprite(400, 200, 50, 50);
  pig.addAnimation("running", pigImage)
pig.scale = 0.2
}

function draw() {
  background("grey");
  if (gameStates == "play"){
    score= +1
    if (bushGroup.isTouching(pig)){
     bushGroup.destroyEach()     
      score+=3
    }
   if (canGroup.isTouching(pig)) {
     gameStates = "end"
   }
  
   spawncan()
  }
  else if(gameStates == "end"){
canGroup.setvelocityXEach(0)
  }
  if (bg.x<0){
    bg.x = width/2
  }
 spawnbush()

  drawSprites();
}
 function spawnbush(){
if(frameCount%120 ===0){
var bush  = createSprite(600,Math.round(random(180,250)))
bush.velocityX = -5
bush.addImage(bushImg)
bush.scale = 0.2
bush.lifetime = 300
bushGroup.add(bush)
  }
}
function spawncan(){
  if(frameCount%150 ===0){
var can  = createSprite(600,Math.round(random(180,250)))
can.velocityX = -5
can.scale = 0.2
can.addImage(canImg)
can.lifetime = 300
canGroup.add(can)

  }
}
