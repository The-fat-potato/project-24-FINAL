
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var bin1;
var bin2;
var bin3;
var paper1;


function preload()
{
	bin1 = loadImage("dustbingreen.png");
	paper1 = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height,800,20)

	bin1 = new Bin(650,680,200,20);
	bin2 = new Bin(760,640,20,100);
	bin3 = new Bin(540,640,20,100);
	
	paper1 = new Paper(100,640,30);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  paper1.display(); 


	KeyPressed();

}


function KeyPressed(){
  
	if(KeyPressed === UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});


	}


}






