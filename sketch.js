const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var land;
var box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2=new Box(210,30,50,80)
     console.log(box2)
    land=new ground ()
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    land.display();
    box2.display();
    
   
}