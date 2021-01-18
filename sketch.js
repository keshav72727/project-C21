var bullet;
var wall,thickness;
var speed , weight;
var damage;

function setup() {
  
    createCanvas(600,400);
    
    bullet =  createSprite(50, 200, 50, 20);
    bullet.shapeColor="white";
    bullet.debug=true;

    wall = createSprite(400,200,thickness,height/2);
    wall.shapeColor=(230,230,230);
    wall.debug=true;

    speed = random (150,200);
    weight= random (30,52);
    thickness = random(22,83);
 
    bullet.velocityX=speed;

}

function draw() 
{

  background(0);

  wall.width=thickness; 

if (isTouching(wall,bullet))
{  
  bullet.velocityX=0;
  
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if (damage<10)
  {
    wall.shapeColor = color(0,255,0);
    bullet.shapeColor=color(0,255,0);
  }

  if (damage>10)
  {
    wall.shapeColor=color(255,0,0);
    bullet.shapeColor=color(255,0,0);
  }
}

  drawSprites();
}