
const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let n_engine;
let n_world;
var ball;
var ground; 
var box; 

function setup()
{
  createCanvas(400,400);

  n_engine = Engine.create();
  n_world = n_engine.world;

  var ball_options = {
    restitution : 0.9 ,
    frictionAir : 0.01
  }

  ball = Bodies.circle(100,200, 20 , ball_options);
  World.add(n_world,  ball);

  console.log(ball);
  console.log(ball.position.y);

  var ground_options = {
    isStatic : true
  }

  ground = Bodies.rectangle(0,390,400,15, ground_options);
  World.add(n_world, ground);

  console.log(ground.position);
  console.log(ground.width);

  var box_options = {
    isStatic : true 


  }

  box = Bodies.rectangle(150,200,90,50, box_options);
  World.add(n_world, box);
 

}

function draw() 
{
  background(51);

  Engine.update(n_engine);

  fill("red");
  ellipse(ball.position.x, ball.position.y , 20, 20);

  fill(180);
  rect(ground.position.x , ground.position.y -15 , 400 ,25);

  var angle = 60;
  var posx = box.position.x;
  var posy = box.position.y;
  Matter.Body.rotate(box, angle);
  push();
  translate(posx, posy )
  rotate(angle);
  rect(0,0, 90, 50);

  pop();

  angle += 0.1;
 
}
 
