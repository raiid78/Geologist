
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world; 
var stone, rubber, hammer; 
var ground; 

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height, 1200, 20); 

	stone =  new Stone(700, 300, 100,100); 

	rubber = new Rubber(800, 420, 60); 

	hammer = new Hammer(10, 100); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightyellow");

  stone.display(); 
  ground.display();
  rubber.display(); 
  hammer.display(); 
  
  drawSprites();
 
}



