var player;
function setup() {
  createCanvas(400,400);
player = createSprite (200,200,100,100)
player.shapeColor="purple"
}
function draw() 
{
 background("lightbrown")
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
player.position.x+=5;
background("red")
}
if(keyIsDown(LEFT_ARROW)){
  player.position.x-=5;
  background("green")
}
if(keyIsDown(UP_ARROW)){
  player.position.y-=5;
  background("orange")
}  
if(keyIsDown(DOWN_ARROW)){
  player.position.y+=5;
  background("blue")
}  

  drawSprites();
}




