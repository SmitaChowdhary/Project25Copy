const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paperObj,groundObj;
var dustbinObj;
var engine,world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObj=new Paper(100,300,70);
	groundObj=new Ground(400,680,800,20);
	dustbinObj=new dustbin(465,620);
	

var render = Render.create({
element : document.body,
engine: engine,
options: {
width: 800,
height: 700,
wireframes: false
}
 }
  );

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  ground.display();
  paper.display();
  dustbinObj.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}


}
