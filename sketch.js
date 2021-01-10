const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body =Matter.Body;

var engine, world;
var gound;
var b1;

function preload(){

}

function setup(){
 engine = Engine.create();
 world = engine.world;
 createCanvas(1000,700);
 ground = new Ground(500,650,1000,30);
 b1=new Block(200,400,30,30)
 Engine.run(engine)
}

function draw(){
    background(180);
 Engine.update(engine);
 ground.display();
 b1.display();
}
