const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bullet,wall;
var speed , weight, thickness;


var world,engine;


function setup() {
  var canvas = createCanvas(1600,400);
  engine = Engine.create();
  world = engine.world;
  bullet = createSprite(50, 200, 100, 35);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80)
  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83);

  World.add(world, bullet);

  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(collided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage =0.5*weight*speed*speed/(thickness*thickness*thickness );
    
    if(damage>10)
    {
      wall.shapeColor = color(255,0,0);
    }

    if(damage<10)
    {
       wall.shapeColor = color(0,255,0);
    }
    

  }
}