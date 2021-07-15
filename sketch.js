
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options = {

	restitution : 1,
	density : 1
}
ball = Bodies.circle(200,100,30,ball_options)
World.add(world,ball)

	Engine.run(engine);
  Ground = new ground(0,680,1600,20)
  left = new ground(600,650,20,80)
  right = new ground(750,650,20,80)

}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,30,30)
  
  drawSprites();
  left.show()
  right.show()
 Ground.show()
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position, {x:50, y:-50})
	}
}


