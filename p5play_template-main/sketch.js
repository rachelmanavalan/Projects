var ball
var sprite
function setup() {
  createCanvas(500,500);
  ball=createSprite (100,200,50,50);
  sprite=createSprite(300,400,100,100);
}

function draw() 
{
  background("blue");
  if (keyDown (LEFT_ARROW)){
    ball.x=ball.x-5
  }
  if (keyDown (RIGHT_ARROW)){
    ball.x=ball.x+5
  }
  if (keyDown (UP_ARROW)){
    ball.y=ball.y-5
  }
  if (keyDown (DOWN_ARROW)){
    ball.y=ball.y+5
  }
  if (ball.isTouching (sprite)){
    ball.shapeColor= 'pink'
    sprite.shapeColor='green'
  }
  drawSprites();
}




