const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,box1,box2,box3,paper1

function preload()
{
	boximage = loadImage('dustbingreen.png');
}

function setup() {
	
	
	var canvas = createCanvas(1000, 600);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	

	paper1 = new Paper(50,300);
	paper1.scale=2;
	ground1 = new Ground(0,520,120000,30);
	
	box1 = new dustbin(890,500,160,7);
	box2 = new dustbin(970,418,15,170);
	box3 = new dustbin(801,418,15,170);
	

	
	
	 Engine.run(engine);
  
}


function draw() {
	background("lightyellow");
	Engine.update(engine);
	
	
	
	ground1.display();
	box3.display();
	box1.display();
	box2.display();
	
	image(boximage,786,310,200,200);
	paper1.display();
	
	
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});

		}
	}



