const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3,box4
var poly
var ss

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(180,280,30,30);
    box2 = new Box(195,280,30,30);
    box3 = new Box(205,280,30,30);
    box4 = new Box(195,250,30,30);
    ground = new Ground(200,300,100,20)
    poly = new Ball(100,100,10,10)
    ss = new SlingShot(poly.body, {x:100,y:100})
}

function draw(){
    background(255, 0, 0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    poly.display();
    ss.display();

    ground.display();
}

function mouseDragged(){
    Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    ss.fly();
}